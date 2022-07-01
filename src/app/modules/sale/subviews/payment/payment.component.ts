import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProductCarStore } from 'src/app/core/services';
import { IAccounts, IFormDetail, IQuotation } from '../../interfaces/store-detail.interface';
import { toJpeg } from 'html-to-image';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {
  @Input() formStore: IFormDetail = {} as IFormDetail;
  @Input() products: IProductCarStore[] = [];
  @Input() quotation!: IQuotation;

  code: number = 0;
  accounts: IAccounts[] = [];

  constructor(
    private productService : ProductsService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.productService.removeAllProductStorage();
  }

  downloadImage(){
    var node:any = document.getElementById('comprobante');
    let width = node.clientWidth;
    let height = node.clientHeight;

    toJpeg(node, { quality: 0.95, width: width, height: height })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'carniceria-zamorano-resumen.jpeg';
      link.href = dataUrl;
      link.click(); 
    });
  }
}
