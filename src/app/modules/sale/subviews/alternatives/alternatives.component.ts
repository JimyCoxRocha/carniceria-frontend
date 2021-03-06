import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toJpeg } from 'html-to-image';
import { IProductCarStore } from 'src/app/core/services';
import { BreakpointsService } from 'src/app/core/services/breakpoints.service';
import { IQuotation } from '../../interfaces/store-detail.interface';

@Component({
  selector: 'app-alternatives',
  templateUrl: './alternatives.component.html',
  styleUrls: ['./alternatives.component.css']
})
export class AlternativesComponent implements OnInit {
  @Input() products: IProductCarStore[] = [];
  @Output() shippingProducts: EventEmitter<Boolean> = new EventEmitter();
  @Input() quotation: IQuotation = {} as IQuotation;

  constructor(private bp: BreakpointsService) { }

  ngOnInit(): void {
  }

  downloadImage(){
    var node:any = document.getElementById('comprobante');
    let width = node.clientWidth;
    let height = node.clientHeight;

    toJpeg(node, { quality: 0.95, width: width, height: height })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'carniceria-zamorano-comprobante.jpeg';
      link.href = dataUrl;
      link.click(); 
    });
  }

  breakpoint(point: string){
/*     console.log("punto: md", this.bp.breakpoint('md'));
    console.log("punto: lg", this.bp.breakpoint('lg')); */
    return this.bp.breakpoint(point)
  }

  

  sendDetailBuy(){
    this.shippingProducts.emit(true);
  }

}
