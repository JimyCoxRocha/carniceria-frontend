import { Component, OnInit } from '@angular/core';
import { ProductoAdminService } from '../services/producto-admin.service';

@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto-admin.component.html',
  styleUrls: ['./producto-admin.component.css']
})
export class ProductoAdminComponent implements OnInit {

  constructor(
    private productoAdminService : ProductoAdminService
  ) { }

  ngOnInit(): void {
    this.productoAdminService.getProductToTable();
  }

  getProductsToTable(){
    return this.productoAdminService.productsToTable;
  }
}
