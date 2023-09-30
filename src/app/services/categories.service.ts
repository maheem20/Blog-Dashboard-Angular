import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

let subCategoryData = {
  subCategory: 'subCategory1'
}
export class CategoriesService {

  constructor(private afs: AngularFirestore) { }

  saveData(data: any) {
    this.afs.collection('categories').add(data).then((docRef: { id: any; }) => {
      console.log(docRef);

      // this.afs.doc(`categories/${docRef.id}`).collection('subCategories').add(subCategoryData)
      this.afs.collection('categories').doc(docRef.id).collection('subCategories').add(subCategoryData).then((docRef1: { id: any; }) => {
        console.log(docRef1);

        // this.afs.doc(`categories/${docRef.id}/subCategories/${docRef1.id}`).collection('subSubCategories').add(subCategoryData)

        this.afs.collection('categories').doc(docRef.id).collection('subCategories').doc(docRef1.id).collection('subSubCategories').add(subCategoryData).then((docRef2: any) => {
          console.log('Second level sub category successfully added!');
        }).catch((err: any) => {
          console.log(err)
        }
        );
      });

    }).catch((err: any) => {
      console.log(err)
    });
  }
}
