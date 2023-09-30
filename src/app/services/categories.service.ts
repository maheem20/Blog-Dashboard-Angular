import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private afs: AngularFirestore) { }

  saveData(data: any) {
    this.afs.collection('categories').add(data).then((docRef: { id: any; }) => {
      console.log(docRef);
    }).catch((err: any) => {
      console.log(err)
    });
  }
}
