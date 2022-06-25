import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, IUploadImageRequest, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';
import { ImagesService } from 'src/app/core/services/images.service';

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
  subCategories : any[] = [];
  selectedSubCategories : any[] = [];


  isLoadingOverlay : boolean = false;
  displayOverlay : boolean = false;
  labelOverlay : string = "";
  iconOverlay : string = "";
  tittleOverlay : string = "";
  urlOverlay : string = "admin/categoria/administrar";

  fileTmp : any;
  photoSelected : string | ArrayBuffer | null = "";
  submitted : boolean = false;

  constructor(
    private categoryService : CategoriesService,
    private primengConfig: PrimeNGConfig,
    private _router : Router,
    private imageService : ImagesService
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
      this.subCategories = this.handleSubcategories(response);
      this.selectedSubCategories = this.category.subCategoria;
      this.isLoading = false;
    })
  }

  handleSubcategories(response : any){
    response.forEach((i : any) =>{
      delete i.numCategories
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

    if(this.labelButton == "Crear"){
      this.createCategory();
      return ;
    }

    this.updateCategory();
  }

  createCategory(){
    const data = {
      image : this.photoSelected as string,
      contentType : this.fileTmp.fileRaw.type
    };

    this.displayOverlay = true;
    this.isLoadingOverlay = true;
    this.tittleOverlay = "Creando categoría";

    this.imageService.createCategory(data).subscribe((response : any) => {
      this.requestCreateCategory(response.imageUrl);
    })
  }

  updateCategory(){
    if(!this.category.urlImage){
      const dataImage = {
        image : this.photoSelected as string,
        contentType : this.fileTmp.fileRaw.type
      };

      this.displayOverlay = true;
      this.isLoadingOverlay = true;
      this.tittleOverlay = "Editando categoría";
      
      this.imageService.createCategory(dataImage).subscribe((response : any) => {
        this.category.urlImage = response.imageUrl;
        this.requestUpdateCategory();
      })    
      return ;
    }
    
    this.requestUpdateCategory();
  }

  requestCreateCategory(urlImage : string){
    this.category.urlImage = urlImage;
    this.category.subCategoria = this.selectedSubCategories;
  
    const data = this.category;

    this.categoryService.createCategory([data]).subscribe((response : any)=>{
      this.isLoadingOverlay = false;
      if(response.toastError){
        this.labelOverlay = response.messageToast;
        this.iconOverlay = "pi pi-times-circle icon_color_red";
        return ;
      }

      this.iconOverlay = "pi pi-check-circle icon_color_green";
      this.labelOverlay = response.message[0];
    });
  }

  requestUpdateCategory(){
    this.category.subCategoria = this.selectedSubCategories;

    const data = this.category;

    this.categoryService.updateCategory(data).subscribe((response) => {
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
    this.category.urlImage = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    this.isEdit = false;
  }

  validateInputs(){
    if(this.isObjEmpty(this.fileTmp) && !this.category.urlImage || !this.category.titulo || !this.category.descripcion){
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
