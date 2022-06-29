import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ApiResponse, DetailProduct, MeasureUnit } from 'src/app/core/interfaces';

import { ImagesService } from 'src/app/core/services/images.service';
import { MeasuresProductService } from 'src/app/core/services/measures-product.service';
import { ProductoAdminService } from 'src/app/modules/admin-modules/producto/services/producto-admin.service';

export interface IProductForm{
  idProducto: number,
  imgUrl: string,
  descripcion: string,
  precio: number,
  titulo: string,
  idUnidad: number,
  stock: number,
  minimaUnidad: string,
  detail : DetailProduct[]
}

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})

export class FormProductComponent implements OnInit {

  @Input() product : IProductForm = {} as IProductForm;
  @Input() isExistPhoto : boolean = false;
  @Input() isEdit : boolean = false;
  @Input() labelButton : string = "";
  @Input() detailsProduct : DetailProduct[] = [];
  
  measures : MeasureUnit[] = [];

  fileTmp : any;
  photoSelected : string | ArrayBuffer | null = "";
  submitted : boolean = false;

  displayModal : boolean = false;

  detailProduct : DetailProduct = {} as DetailProduct;
  isExistPhotoDetail : boolean = false;

  isLoadingOverlay : boolean = true;
  isLoading : boolean = true;
  displayOverlay : boolean = false;
  isEditDetail : boolean = false;
  labelOverlay : string = "";
  iconOverlay : string = "";
  urlOverlay : string = "/admin/productos";
  tittleOverlay = "";
  actionText : string = "";
  idProduct : number = 0;

  constructor(
    private primengConfig: PrimeNGConfig,
    private _router : Router,
    private imageService : ImagesService,
    private measureService : MeasuresProductService,
    private productService : ProductoAdminService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getAllMeasures();
  }

  getAllMeasures(){
    this.measureService.getAllMeasuresProduct().subscribe((response : ApiResponse<MeasureUnit[]>)=>{
      this.measures = response.data;
      this.isLoading = false;
    })
  }

  selectFunctionProduct(){
    this.updateProduct();
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

  buttonBack(){
    this._router.navigate(['/admin/productos']);
  }

  clearImage(){
    this.product.imgUrl = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    this.isEdit = false;
  }

  validateInputs(){
    // if(this.isObjEmpty(this.fileTmp) && !this.category.urlImage || !this.category.titulo || !this.category.descripcion){
    //   return false;
    // }

    // return true;
  }


  isObjEmpty(obj : any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  openModal(){
    this.displayModal = true;
    this.actionText = 'Crear'
    this.detailProduct = {} as DetailProduct;
    this.isExistPhotoDetail = false;
    this.isEditDetail = false;
  }

  setDetailProductEdit(detail : DetailProduct){
    this.detailProduct = detail;
    this.isExistPhotoDetail = true;
    this.isEditDetail = true;
  }

  addProduct(){

    const image = {
      image : this.photoSelected as string,
      contentType : this.fileTmp.fileRaw.type
    }

    this.displayOverlay = true;
    this.isLoadingOverlay = true;
    this.tittleOverlay = "Creando Producto";

    this.imageService.uploadImage(image).subscribe((response : any) => {
      this.requestAddProduct(response.data.imageUrl);
    })

  }

  requestAddProduct(image : string){
    this.product.imgUrl = image;
    this.product.detail = this.detailsProduct;

    this.productService.createProduct(this.product).subscribe((response : any)=>{
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

  updateProduct(){
    this.product.detail = this.detailsProduct;

    this.displayOverlay = true;
    this.isLoadingOverlay = true;
    this.tittleOverlay = "Editando categoría";

    if(this.product.imgUrl == ""){
      const image = {
        image : this.photoSelected as string,
        contentType : this.fileTmp.fileRaw.type
      }

      this.imageService.uploadImage(image).subscribe((response : any) => {
        this.product.imgUrl = response.data.imageUrl;
        this.requestUpdateProduct();
      })    
      return ;
    }

    this.requestUpdateProduct();
  }

  requestUpdateProduct(){
    const data = this.product;

    console.log(data)
    this.productService.updateProduct(data).subscribe((response) => {
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
}
