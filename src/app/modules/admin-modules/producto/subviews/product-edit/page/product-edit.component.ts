import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DetailProduct } from 'src/app/core/interfaces';
import { IProductAdminDetail } from '../../../interfaces/product-admin.interface';
import { ProductoAdminService } from '../../../services/producto-admin.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  labelButton : string = "Editar";
  idProduct : number = 0;
  productResponse : any = {};
  isLoading : boolean = true;
  isExistPhoto : boolean = true;
  isEdit : boolean = true;
  detailsProduct : DetailProduct[] = [];

  constructor(
    private primengConfig: PrimeNGConfig,
    private _route : ActivatedRoute,
    private productService : ProductoAdminService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getIdProduct();
  }

  getIdProduct(){
    this._route.params.subscribe((param : any) =>{
      this.idProduct = param['id'];

      this.getDetailProduct();
    })
  }

  getDetailProduct(){
    this.productService.getDetailToTable( this.idProduct ).subscribe((response : IProductAdminDetail)=>{
      this.productResponse = {
        idProducto: response.product.idProducto,
        imgUrl: response.product.imgUrl,
        descripcion: response.product.descripcion,
        precio: response.product.precio,
        titulo: response.product.titulo,
        idUnidad: response.product.idUnidad,
        stock: response.product.stock,
        minimaUnidad: response.product.minimaUnidad,
      }

      this.detailsProduct = response.detail;

      this.isLoading = false;

    })
  }
}
