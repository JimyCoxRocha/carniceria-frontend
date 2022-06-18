import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  isLoading : boolean;
  category : any;


  constructor(
    private primengConfig: PrimeNGConfig,
    private _router : Router
  ) { 
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  buttonBack(){
    this._router.navigate(['admin/administrar']);
  }

  getDetailCategory(){
    
  }
}
