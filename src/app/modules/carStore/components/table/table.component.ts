import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Product, ProductoResponse } from 'src/app/core/interfaces';
import { IProductCarStore } from 'src/app/core/services';
import { ValidatorService } from 'src/app/core/services/validator.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input('_products') _products: IProductCarStore[] = [];
  @Input('isLoading') isLoading : boolean = true;
  @Output() deleteAll: EventEmitter<boolean> = new EventEmitter();
  @Output('removeProduct') _removeProduct: EventEmitter<number> = new EventEmitter();
  @Output("productEdited") productEdited: EventEmitter<IProductCarStore> = new EventEmitter();
  

  constructor(
    private validatorService: ValidatorService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
 }

  ngOnInit(): void {
  }

  get products(){
    return this._products;
  }

  handleDeleteAll(){
    this.deleteAll.emit(true);
  }

  removeProduct(idProduct: number){
    this._removeProduct.emit(idProduct);
  }
  
  changeValue(event: IProductCarStore){
    this.productEdited.emit(event);
  }

}
