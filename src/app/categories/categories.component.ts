import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category
    }
    let subCategoryData = {
      subCategory: 'subCategory1'
    }

    this.afs.collection('categories').add(categoryData).then((docRef: { id: any; }) => {
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