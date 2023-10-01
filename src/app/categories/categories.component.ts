import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryArray: Array<object> | undefined;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.loadData().subscribe(val => {
      console.log(val);
    });
  }

  onSubmit(formData: any) {
    let categoryData: Category = {
      category: formData.value.category
    }

    this.categoriesService.saveData(categoryData);
  }
}