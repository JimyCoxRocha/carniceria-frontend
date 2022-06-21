import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  value1 : any
  value10 : any
  selectedCities: string[] = [];
  isExistPhoto : boolean = false;

  constructor(
    private _router : Router,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
  }

  buttonBack(){
    this._router.navigate(['admin/administrar']);
  }

  getPhotoSelected($event : any){

  }
}
