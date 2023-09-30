import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    let categoryData = {
      category: formData.value.category
    }

    this.categoriesService.saveData(categoryData);
  }
}