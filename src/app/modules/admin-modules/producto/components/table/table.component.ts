import { Component, Host, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductAdminSimple } from '../../interfaces/product-admin.interface';
import {ConfirmationService, MessageService} from 'primeng/api';
import { ProductoAdminService } from '../../services/producto-admin.service';
import { ProductoAdminComponent } from '../../page/producto-admin.component';

@Component({
  selector: 'app-admin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class TableComponent implements OnInit {

  @Input() products : IProductAdminSimple[] = []
  @Input() isLoading : boolean = false;

  constructor(
    private _router : Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private productService : ProductoAdminService,
    @Host() private productAdminComponent : ProductoAdminComponent
  ) 
  {}

  ngOnInit(): void {
  }

  onRowSelect(event : any) {
    let idProduct = event.data.idProducto;
    this._router.navigate([`admin/productos/detail-product/${idProduct}`]);
  }

  
  showModalActiveProduct(product : IProductAdminSimple){
    this.confirmationService.confirm({
      header : "Confirmación",
      message: `¿Desea activar el siguiente producto: "${product.titulo}"?`,
      acceptLabel : "Activar",
      rejectLabel : "Cancelar",
      rejectButtonStyleClass : "p-button-danger p-button-text",
      acceptButtonStyleClass : "p-button-outlined p-button-success",
      accept: () => {
          this.activateProduct(product.idProducto);
      }
    });
  }

  
  showModalDeleteProduct(product : IProductAdminSimple){
    this.confirmationService.confirm({
      header : "Confirmación",
      message: `¿Desea inactivar el siguiente producto: "${product.titulo}"?`,
      acceptLabel : "Inactivar",
      rejectLabel : "Cancelar",
      rejectButtonStyleClass : "p-button-danger p-button-text",
      acceptButtonStyleClass : "p-button-outlined p-button-info",
      accept: () => {
          this.deleteProduct(product.idProducto);
      }
    });
  }

  activateProduct(idProduct : number){
    this.productAdminComponent.isLoading = true;

    this.productService.activeProduct(idProduct).subscribe((response : any) => {
      if(response.toastError){
        this.productAdminComponent.isLoading = false;
        this.messageService.add({severity:'error', summary: 'Error', detail: `${response.messageToast}`});
        return ;
      }

      this.productAdminComponent.getProductsToTable();
      this.messageService.add({severity:'success', summary: 'Completado', detail: 'Producto activado con éxito', life : 3000});
    })
  }

  deleteProduct(idProduct : number){
    this.productAdminComponent.isLoading = true;

    this.productService.deleteProduct(idProduct).subscribe((response : any) => {
      if(response.toastError){
        this.productAdminComponent.isLoading = false;
        this.messageService.add({severity:'error', summary: 'Error', detail: `${response.messageToast}`});
        return ;
      }

      this.productAdminComponent.getProductsToTable();
      this.messageService.add({severity:'success', summary: 'Completado', detail: 'Producto inactivado con éxito', life : 3000});
    })
  }
}
  