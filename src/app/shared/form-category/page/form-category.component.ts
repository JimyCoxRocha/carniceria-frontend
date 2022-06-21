import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  @Input() category : Category = {} as Category;
  @Input() selectedSubCategories : SubCategory[] = [];
  @Input() isExistPhoto : boolean = false;
  
  a : any;
  isLoading : boolean = true;
  subCategories : SubCategory[] = [];
  
  fileTmp : any;
  photoSelected? : string | ArrayBuffer | null;

  constructor(
    private categoryService : CategoriesService,
    private primengConfig: PrimeNGConfig,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getAllSubcategories();
  }

  buttonBack(){
    this._router.navigate(['admin/administrar']);
  }

  getAllSubcategories(){
    this.categoryService.subCategories().subscribe((response : SubCategory[]) =>{
      this.subCategories = response;
      this.isLoading = false;
      this.a = this.selectedSubCategories;
      console.log(this.a);
    })
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

  createCategory(){
    this.category.subCategoria = this.selectedSubCategories;

    console.log(this.category);
  }

  clearImage(){
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
  }
}
