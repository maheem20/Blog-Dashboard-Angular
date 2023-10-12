import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) { }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(logRef => {
      this.toastr.success('Login Successful');
      this.loadUser();
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
      this.router.navigate(['/login']);
    });
  }

}
