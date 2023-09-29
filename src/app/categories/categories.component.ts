import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {;
  }
  
  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category
    }
    let subCategoryData = {
      subCategory: 'subCategory1'
    }

    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);

      this.afs.collection('categories').doc(docRef.id).collection('subCategories').add(subCategoryData).then(docRef1 => {
        console.log(docRef1);
      });

    }).catch((err: any) => {
      console.log(err)});
    }
}