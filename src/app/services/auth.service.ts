import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedInGuard: boolean = false;

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) { }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(logRef => {
      this.toastr.success('Login Successful');
      this.loadUser();

      this.loggedIn.next(true);

      this.router.navigate(['/']);
    }).catch((e: any) => {
      this.toastr.warning(e);
    });
  }

  loadUser() {
    this.afAuth.authState.subscribe((user: any) => {
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.toastr.success('Logout Successful');
      localStorage.removeItem('user');

      this.loggedIn.next(false);

      this.router.navigate(['/login']);
    });
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

}
