import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DetailProduct } from 'src/app/core/interfaces';
import { ImagesService } from 'src/app/core/services/images.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() product : any = {};
  @Input() isExistPhoto : boolean = false;
  @Input() isEdit : boolean = false;
  @Input() labelButton : string = "";
  
  fileTmp : any;
  photoSelected : string | ArrayBuffer | null = "";
  submitted : boolean = false;

  cities: any[] = [];
  selectedCity1: any;
  displayModal : boolean = false;

  detailsProduct : DetailProduct[] = [];

  isLoadingOverlay : boolean = true;
  displayOverlay : boolean = false;
  labelOverlay : string = "";
  iconOverlay : string = "";
  urlOverlay : string = "";
  tittleOverlay = "";

  constructor(
    private primengConfig: PrimeNGConfig,
    private _router : Router,
    private imageService : ImagesService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  selectFunctionProduct(){

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
    this._router.navigate(['admin/categoria/administrar']);
  }

  clearImage(){
    // this.category.urlImage = "";
    this.fileTmp = {};
    this.isExistPhoto = false;
    this.photoSelected = "";
    // this.isEdit = false;
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
  }
}
