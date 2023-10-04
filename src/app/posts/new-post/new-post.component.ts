import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  permalink: string = '';
  imgSrc: string = './assets/images/placeholder-image.jpeg';
  selectedImg: any;

  categories: Array<any> = [];

  postForm: FormGroup | undefined

  constructor(private categoriesService: CategoriesService, private fb: FormBuilder) {
    this.postForm = this.fb.group({ });
  }

  ngOnInit(): void {
    this.categoriesService.loadData().subscribe((val: any[]) => {
      this.categories = val;
    });
  }

  onTitleChanged($event: any) {
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
  }
  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imgSrc = e.target.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

}
