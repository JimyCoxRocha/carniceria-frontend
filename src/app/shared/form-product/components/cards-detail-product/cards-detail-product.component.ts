import { Component, Host, Input, OnInit } from '@angular/core';
import { DetailProduct } from 'src/app/core/interfaces';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { FormProductComponent } from '../../page/form-product.component';


@Component({
  selector: 'app-cards-detail-product',
  templateUrl: './cards-detail-product.component.html',
  styleUrls: ['./cards-detail-product.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class CardsDetailProductComponent implements OnInit {

  @Input() detailsProduct : DetailProduct[] = [];

  urlImageNotFound : string = "../../../../assets/images/not_found.png";
  
  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    @Host() private formProductComponent : FormProductComponent,
  ) { }

  ngOnInit(): void {
  }

  editDetail(detail : DetailProduct){
    this.formProductComponent.setDetailProductEdit(detail);
    this.formProductComponent.isEditDetail = true;
    this.formProductComponent.displayModal = true;
    this.formProductComponent.actionText = 'Editar';
  }

  deleteDetailProduct(detail : DetailProduct){
    this.confirmationService.confirm({
      header : "Confirmación",
      message: `Estas seguro de eliminar el detalle: ${detail.tituloDetalle}`,
      acceptLabel : "Confirmar",
      rejectLabel : "Cancelar",
      rejectButtonStyleClass : "p-button-outlined p-button-danger"	,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.deleteDetail(detail)
      }
    });
  }

  deleteDetail(detail : DetailProduct){
    const detailTittle = detail.tituloDetalle;
    let index = 0;

    this.detailsProduct.forEach((x : DetailProduct)=>{
      if(x.tituloDetalle === detailTittle) {
        index = this.detailsProduct.indexOf(x);
      }
    })

    this.formProductComponent.detailsProduct.splice(index,1);
    this.messageService.add({severity:'info', summary:'Eliminado', detail:'El detalle ha sido eliminado con éxito'});
  }
}
