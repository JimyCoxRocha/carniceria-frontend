import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  activeIndex: number = 0;
    
    constructor() {}

  items: MenuItem[] = [
    {
      label: 'Inicio'
    },
    {
      label: 'Envío',
    },
    {
      label: 'Revisión y Pagos'
    }
  ];

  ngOnInit(): void {
  }

}
