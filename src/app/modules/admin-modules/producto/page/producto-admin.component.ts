import { Component, OnInit } from '@angular/core';
import { IProductAdminSimple } from '../interfaces/product-admin.interface';
import { ProductoAdminService } from '../services/producto-admin.service';

@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto-admin.component.html',
  styleUrls: ['./producto-admin.component.css']
})
export class ProductoAdminComponent implements OnInit {

  products : IProductAdminSimple[] = []
  isLoading : boolean = true;

  constructor(
    private productoAdminService : ProductoAdminService
  ) { }

  ngOnInit(): void {
    this.getProductsToTable();
  }

  getProductsToTable(){
    return this.productoAdminService.getProductToTable().subscribe((response : IProductAdminSimple[])=>{
      this.products = response;
      this.isLoading = false;
    })
  }
}
