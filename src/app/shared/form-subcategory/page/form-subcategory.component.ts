import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-form-subcategory',
  templateUrl: './form-subcategory.component.html',
  styleUrls: ['./form-subcategory.component.css']
})
export class FormSubcategoryComponent implements OnInit {

  @Input() subCategory : SubCategory = {} as SubCategory;
  @Input() selectedCategories : Category[] = [];
  @Input() isExistPhoto : boolean = false;
  @Input() isEdit : boolean = false;
  @Input() labelButton : string = ""

  isLoading : boolean = true;
  categories : Category[] = [];
  
  fileTmp : any;
  photoSelected? : string | ArrayBuffer | null;

  constructor(
    private categoryService : CategoriesService,
    private primengConfig: PrimeNGConfig,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getAllCategories();
  }

  buttonBack(){
    this._router.navigate(['admin/sub-categoria/administrar']);
  }


  getPhotoSelected($event : any){
    if($event.target.files && $event.target.files[0]){
      const [ file ] = $event.target.files;

      this.fileTmp = {
          fileRaw : file,
          fileName : file.name,
          fileSize : file.size,
      }

      const reader = new FileReader;
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.fileTmp.fileRaw);
      this.isExistPhoto = true;
    }
  }

  selectFunctionCategory(){
    if(this.labelButton == "Crear"){
      this.createSubcategory();
      return ;
    }

    this.updateSubcategory();
  }

  createSubcategory(){
    this.subCategory.urlImage = "https://images.unsplash.com/photo-1603048297172-c92544798d5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    this.subCategory.categories = !this.selectedCategories ? [] : this.selectedCategories;
    
    const data = [this.subCategory];

    

  }

  updateSubcategory(){
    console.log("ACTUALIZADO");
  }

  clearImage(){
    this.subCategory.urlImage = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    this.isEdit = false;
  }

  getAllCategories(){
    this.categoryService.categories().subscribe((response : Category[]) =>{
      this.categories = response;
      this.isLoading = false;
      this.selectedCategories = this.subCategory.categories;
    })
  }
}
