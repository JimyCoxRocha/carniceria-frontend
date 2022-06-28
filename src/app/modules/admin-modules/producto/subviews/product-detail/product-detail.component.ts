import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdminElementExtraDetail, IAdminElementExtraDetailMixed, ICardElementExtraDetail } from 'src/app/core/components/admin-components/interfaces';
import { Category, DetailProduct, Product } from 'src/app/core/interfaces';
import { IProductAdminDetail } from '../../interfaces/product-admin.interface';
import { ProductoAdminService } from '../../services/producto-admin.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  productResponse: IProductAdminDetail | null = null;
  product : Product = {} as Product;


  productDetail : DetailProduct[] = [];
  productCategory : Category[] = [];
  categorySelect : Category = {} as Category;

  idProduct : number = 0;

  isLoading : boolean = true;

  constructor(private route: ActivatedRoute, 
    private detailService : ProductoAdminService,
    private primengConfig: PrimeNGConfig,
    private _router : Router,
    ) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getIdProduct();
  }

  getIdProduct(){
    this.route.params.subscribe((param : any) =>{
      this.idProduct = param['id'];

      this.getDetailProduct();
    })
  }

  
  getDetailProduct(){
    this.detailService.getDetailToTable(this.idProduct).subscribe((response : IProductAdminDetail) => {
      this.productResponse = response;
      this.productDetail = this.productResponse.detail;
      this.productCategory = this.productResponse.categories;
      this.categorySelect = this.productCategory[0];
      this.product = this.productResponse.product;
      this.isLoading = false;
      console.log(this.productResponse)
    })
  }
  
  buttonBack(){
    this._router.navigate(['admin/productos']);
  }

  redirectEditPage(){
    this._router.navigate([`admin/productos/edit-product/${this.idProduct}`])
  }
}
