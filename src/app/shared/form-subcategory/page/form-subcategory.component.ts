import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';
import { ImagesService } from 'src/app/core/services/images.service';

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

  
  isLoadingOverlay : boolean = false;
  displayOverlay : boolean = false;
  labelOverlay : string = "";
  iconOverlay : string = "";
  submitted : boolean = false;
  tittleOverlay : string = "";
  urlOverlay : string = "admin/sub-categoria/administrar";
  
  fileTmp : any;
  photoSelected? : string | ArrayBuffer | null;

  constructor(
    private categoryService : CategoriesService,
    private primengConfig: PrimeNGConfig,
    private _router : Router,
    private imageService : ImagesService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getAllCategories();
  }

  buttonBack(){
    this._router.navigate(['admin/sub-categoria/administrar']);
  }

  getAllCategories(){
    this.categoryService.categoriesAdmin().subscribe((response : Category[]) =>{
      this.categories = this.handleCategories(response)
      this.selectedCategories = this.subCategory.categories;
      this.isLoading = false;
    })
  }

  handleCategories(response : any){
    response.forEach((i : any) =>{
      delete i.numSubCategories
    })

    return response;
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

    this.subCategory.categories = !this.selectedCategories ? [] : this.selectedCategories;

    if(this.labelButton == "Crear"){
      this.createSubcategory();
      return ;
    }

    this.updateSubcategory();
  }

  createSubcategory(){
    const data = {
      image : this.photoSelected as string,
      contentType : this.fileTmp.fileRaw.type
    };

    this.displayOverlay = true;
    this.isLoadingOverlay = true;
    this.tittleOverlay = "Creando subcategoría";

    this.imageService.createCategory(data).subscribe((response : any) => {
      this.requestCreateSubCategory(response.imageUrl);
    })
  }

  updateSubcategory(){
    if(!this.subCategory.urlImage){
      const dataImage = {
        image : this.photoSelected as string,
        contentType : this.fileTmp.fileRaw.type
      };

      this.displayOverlay = true;
      this.isLoadingOverlay = true;
      this.tittleOverlay = "Editando subcategoría";
      
      this.imageService.createCategory(dataImage).subscribe((response : any) => {
        this.subCategory.urlImage = response.imageUrl;
        this.requestUpdateSubCategory();
      })    
      return ;
    }
    
    this.requestUpdateSubCategory();
  }

  requestCreateSubCategory(response : string){
    this.subCategory.urlImage = response;

    const data = this.subCategory;

    this.categoryService.createSubcategory([data]).subscribe((response) => {
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

  requestUpdateSubCategory(){
    const data = this.subCategory;
    
    this.categoryService.updateSubcategory(data).subscribe((response) => {
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

  clearImage(){
    this.subCategory.urlImage = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    this.isEdit = false;
  }

  validateInputs(){
    if(this.isObjEmpty(this.fileTmp) && !this.subCategory.urlImage || !this.subCategory.titulo || !this.subCategory.descripcion){
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
