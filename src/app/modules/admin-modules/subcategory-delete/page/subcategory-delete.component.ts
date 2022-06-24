import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-subcategory-delete',
  templateUrl: './subcategory-delete.component.html',
  styleUrls: ['./subcategory-delete.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class SubcategoryDeleteComponent implements OnInit {

  isDelete : boolean = true;
  
  constructor(
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
