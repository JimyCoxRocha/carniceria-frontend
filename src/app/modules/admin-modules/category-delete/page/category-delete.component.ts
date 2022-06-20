import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  categories : Category[] = [] ;
  isLoading : boolean;
  isDelete : boolean;
  
  constructor(
    private categoryService : CategoriesService,
  ) { 
    this.isLoading = true;
    this.isDelete = true;
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    return this.categoryService.categoriesAdmin().subscribe((response) => {
      this.categories = response;
      this.isLoading = false;
      console.log(this.categories);
    })
  }

}
