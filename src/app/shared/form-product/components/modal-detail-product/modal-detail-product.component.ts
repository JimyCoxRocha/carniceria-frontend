import { Component, Host, Input, OnInit } from '@angular/core';
import { DetailProduct } from 'src/app/core/interfaces';
import { ImagesService } from 'src/app/core/services/images.service';
import { FormProductComponent } from '../../page/form-product.component';

@Component({
  selector: 'app-modal-detail-product',
  templateUrl: './modal-detail-product.component.html',
  styleUrls: ['./modal-detail-product.component.css']
})
export class ModalDetailProductComponent implements OnInit {

  @Input() displayModal : boolean = false;
  @Input() detailProduct : DetailProduct = {} as DetailProduct;
  @Input() isEditDetail : boolean = false;
  @Input() actionText : string = "";
  @Input() isExistPhotoDetail : boolean = false;

  fileTmp : any;
  photoSelected : string | ArrayBuffer | null = "";
  submitted : boolean = false;

  constructor(
    @Host() private _formProductComponent : FormProductComponent,
    private imageService : ImagesService
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this._formProductComponent.displayModal = false;
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
      this.isExistPhotoDetail = true;
    }
  }

  clearImage(){
    if(this.actionText === "Editar"){
      this.detailProduct.urlImg = "";  
    }

    this.fileTmp = {};
    this.isExistPhotoDetail = false;
    this.photoSelected = "";
    this.isEditDetail = false;
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

  selectFunctionDetail(){
    if(this.actionText == 'Crear'){
      this.addDetail();
      return;
    }

    this.editDetail();
  }

  addDetail(){
    const data = {
      image : this.photoSelected as string,
      contentType : this.fileTmp.fileRaw.type
    };

    this._formProductComponent.displayOverlay = true;
    this._formProductComponent.isLoadingOverlay = true;
    this._formProductComponent.tittleOverlay = "Añadiendo Detalle del Producto";

    this.imageService.uploadImage(data).subscribe((response : any) => {
      this._formProductComponent.displayModal = false;
      this._formProductComponent.displayOverlay = false;
      
      this.requestAddDetail(response.data.imageUrl);
    })
  }

  requestAddDetail(urlImageDetail : string){
    this.detailProduct.urlImg = urlImageDetail;
    this._formProductComponent.detailsProduct.push(this.detailProduct);
    this.clearImage();
  }

  editDetail(){
    this._formProductComponent.displayOverlay = true;
    this._formProductComponent.isLoadingOverlay = true;
    this._formProductComponent.tittleOverlay = "Editando Detalle del Producto";

    if(!this.detailProduct.urlImg){
      const dataImage = {
        image : this.photoSelected as string,
        contentType : this.fileTmp.fileRaw.type
      };

      this.imageService.uploadImage(dataImage).subscribe((response : any) => {
        this.fileTmp = {};
        this.photoSelected = "";
        this.isEditDetail = true;
        this.requestEditDetail(response.data.imageUrl);
      })    
      return ;
    }

    this.requestEditDetail(this.detailProduct.urlImg);
  }

  requestEditDetail(urlImageDetail : string){
    this.detailProduct.urlImg = urlImageDetail;

    console.log(this.detailProduct)
    const detailTittle = this.detailProduct.tituloDetalle;
    let index = 0;

    this._formProductComponent.detailsProduct.forEach((x : DetailProduct)=>{
      if(x.tituloDetalle === detailTittle) {
        index = this._formProductComponent.detailsProduct.indexOf(x);
      }
    })

    this._formProductComponent.detailsProduct[index] = this.detailProduct;

    setTimeout(() => {
      this._formProductComponent.displayModal = false;
      this._formProductComponent.displayOverlay = false;
    }, 2000);
  }
}
