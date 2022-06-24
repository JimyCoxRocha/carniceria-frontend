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
  @Input() isExistPhoto : boolean = false;
  @Input() isEdit : boolean = false;
  @Input() labelButton : string = "";
  
  isLoading : boolean = true;
  subCategories : SubCategory[] = [];
  selectedSubCategories : SubCategory[] = [];
  
  isLoadingOverlay : boolean = false;
  displayOverlay : boolean = false;
  labelOverlay : string = "";
  iconOverlay : string = "";
  tittleOverlay : string = "";
  urlOverlay : string = "admin/categoria/administrar";

  fileTmp : any;
  photoSelected? : string | ArrayBuffer | null;
  submitted : boolean = false;

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
    this._router.navigate(['admin/categoria/administrar']);
  }

  getAllSubcategories(){
    this.categoryService.subCategories().subscribe((response : SubCategory[]) =>{
      this.subCategories = response;
      this.isLoading = false;
      this.selectedSubCategories = this.category.subCategoria;
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

  selectFunctionCategory(){
    this.submitted = true;

    if(!this.validateInputs()) return ;

    if(this.labelButton == "Crear"){
      this.createCategory();
      return ;
    }

    this.updateCategory();
  }

  createCategory(){
    this.category.urlImage = "https://images.unsplash.com/photo-1603048297172-c92544798d5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    this.category.subCategoria = this.selectedSubCategories;
    
    const data = this.category;
    this.displayOverlay = true;
    this.isLoadingOverlay = true;
    this.tittleOverlay = "Creando categoría";

    this.categoryService.createCategory([data]).subscribe((response : any)=>{
      this.isLoadingOverlay = false;
      if(response.toastError){
        this.labelOverlay = response.messageToast;
        this.iconOverlay = "pi pi-times-circle icon_color_red";
        return ;
      }

      this.iconOverlay = "pi pi-check-circle icon_color_green";
      this.labelOverlay = response.message[0];
      
    })
  }

  updateCategory(){
    console.log("ACTUALIZADO");
  }

  clearImage(){
    this.category.urlImage = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    this.isEdit = false;
  }

  validateInputs(){
    if(this.isObjEmpty(this.fileTmp) || !this.category.titulo || !this.category.descripcion){
      return false;
  }

    return true;
  }


  isObjEmpty(obj : any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }
}
