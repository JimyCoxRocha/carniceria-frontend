import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-subcategory-detail',
  templateUrl: './subcategory-detail.component.html',
  styleUrls: ['./subcategory-detail.component.css']
})
export class SubcategoryDetailComponent implements OnInit {

  isLoading : boolean;
  idSubcategory : number ;
  
  subCategory : SubCategory = {} as SubCategory;
  categories : Category[] = [];

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _categoryService : CategoriesService
  ) { 
    this.isLoading = true;
    this.idSubcategory = 0;
  }

  ngOnInit(): void {
    this.getIdSubcategory();
  }

  getIdSubcategory(){
    this._route.params.subscribe((param : any) =>{
      this.idSubcategory = param['id'];

      this.getDetailSubcategory();
    })
  }

  getDetailSubcategory(){
    this._categoryService.getSubcategoryById(this.idSubcategory).subscribe((response : any) =>{
      this.subCategory = response;
      this.categories = response.categories;
      console.log(this.categories);
      this.isLoading = false;
    })
  }
  
  buttonBack(){
    this._router.navigate(['admin/sub-categoria/administrar']);
  }

  redirectEditPage(){
    this._router.navigate([`admin/sub-categoria/administrar/edit-subcategory/${this.subCategory.idSubcategoria}`])
  }
}
