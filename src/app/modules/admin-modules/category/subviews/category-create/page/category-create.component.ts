import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  value1 : any
  value10 : any
  selectedCities: string[] = [];
  isExistPhoto : boolean = false;

  category : Category = {} as Category;

  subCategories : SubCategory[] = [];
  selectedSubCategories : SubCategory[] = [];

  constructor(
    private _router : Router,
    private categoryService : CategoriesService,
    private primengConfig: PrimeNGConfig,

  ) { }

  ngOnInit(): void {
    this.getAllSubcategories();
  }

  getAllSubcategories(){
    this.categoryService.subCategories().subscribe((response : SubCategory[]) =>{
      this.subCategories = response;
    })
  }

  buttonBack(){
    this._router.navigate(['admin/administrar']);
  }

  getPhotoSelected($event : any){

  }

  createCategory(){
    console.log(this.selectedSubCategories);
  }
}
