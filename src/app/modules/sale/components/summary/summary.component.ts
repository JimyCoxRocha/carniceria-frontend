import { Component, Input, OnInit } from '@angular/core';
import { IProductCarStore } from 'src/app/core/services';
import { IQuotation } from '../../interfaces/store-detail.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() quotation: IQuotation = {} as IQuotation;
  @Input('products') products: IProductCarStore[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
