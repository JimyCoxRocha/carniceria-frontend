import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProductoResponse } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-product-main-detail',
  templateUrl: './product-main-detail.component.html',
  styleUrls: ['./product-main-detail.component.css']
})
export class ProductMainDetailComponent implements OnInit {

  amountProduct : number = 0;
  idProducto : number = 0;
  isLoading : boolean = true;
  productResponse : ProductoResponse = {} as ProductoResponse;
  urlImageNotFound : string = "../../../../assets/images/not_found.png";

  constructor(
    private route : ActivatedRoute,
    private productService : ProductsService,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getIdProducto();
  }

  getIdProducto(){
    this.route.params.subscribe((param : any)=>{
      this.idProducto = param['id'];
      this.isLoading = true;
      this.getDetail()
    })
  }

  getDetail(){
    this.productService.getDetailProduct(this.idProducto).subscribe((response : ProductoResponse)=>{
      this.productResponse = response;
      this.isLoading = false;
    });
  }

}