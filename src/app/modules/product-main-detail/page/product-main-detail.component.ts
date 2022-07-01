import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Product, ProductoResponse } from 'src/app/core/interfaces';
import { IProductsCar, ProductsService } from 'src/app/core/services';
import { ValidatorService } from 'src/app/core/services/validator.service';

@Component({
  selector: 'app-product-main-detail',
  templateUrl: './product-main-detail.component.html',
  styleUrls: ['./product-main-detail.component.css']
})
export class ProductMainDetailComponent implements OnInit {

  amountProduct : number = 1;
  idProducto : number = 0;
  isLoading : boolean = true;
  isInCar : boolean = false;
  productResponse : ProductoResponse = {} as ProductoResponse;
  urlImageNotFound : string = "../../../../assets/images/not_found.png";

  constructor(
    private route : ActivatedRoute,
    private productService : ProductsService,
    private primengConfig: PrimeNGConfig,
    private validatorService: ValidatorService
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
      const productInStorage = this.productService.findProductStorage(response.product.idProducto);
      if(productInStorage){
        this.amountProduct = this.getAmount(response.product, productInStorage);
        this.isInCar = true;
      }
      this.productResponse = response;
      this.isLoading = false;
    });
  }
  setProductInStorage(product: Product){
    this.isInCar = true;
    this.productService.setProductStorage({
      amount: this.amountProduct,
      id: product.idProducto
    });
  }

  removeSelectedProduct(idProduct: number){
    this.isInCar = false;
    this.productService.removeProductStorage(idProduct);
  }

  getAmount(element: Product, productInStorage: IProductsCar){
    const productAmount = productInStorage.amount ? productInStorage.amount : 1;
    return this.validatorService.validateRange(productAmount, {
                max: element.stock,
                min: 1
    })
  }
}
