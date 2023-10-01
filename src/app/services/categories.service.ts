import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  saveData(data: any) {
    this.afs.collection('categories').add(data).then((docRef: { id: any; }) => {
      console.log(docRef);
      this.toastr.success('Category added successfully!');
    }).catch((err: any) => {
      console.log(err)
    });
  }
}
