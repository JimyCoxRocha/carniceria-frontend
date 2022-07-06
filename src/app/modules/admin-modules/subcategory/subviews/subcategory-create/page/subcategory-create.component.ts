import { Component, OnInit } from '@angular/core';
import { Category, SimpleProductInSubCategory, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-subcategory-create',
  templateUrl: './subcategory-create.component.html',
  styleUrls: ['./subcategory-create.component.css']
})
export class SubcategoryCreateComponent implements OnInit {

  subCategory : SubCategory = { idSubcategoria: undefined } as any;
  selectedCategories : Category[] = [];
  isExistPhoto : boolean = false;
  isEdit : boolean = false;
  labelButton : string = "Crear"
  products: SimpleProductInSubCategory[] = [];

  constructor(
    private categoryService : CategoriesService
  ) {
    this.getProductsToSubCategory();
  }

  ngOnInit(): void {
  }

  getProductsToSubCategory(){
    console.log("this.subCategory",this.subCategory);
    this.categoryService.getProductsStatusInSubcategory(this.subCategory.idSubcategoria).subscribe((response : SimpleProductInSubCategory[]) =>{
      this.products = response;
    })
  }
}
