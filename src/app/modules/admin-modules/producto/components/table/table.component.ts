import { AfterViewInit, Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { CoreService } from '../../../../../core/services/core.service';
import { IProductAdminSimple } from '../../interfaces/product-admin.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-admin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'idProducto', 'titulo', 'status', 'stock', 'acciones'];
  dataSource: MatTableDataSource<IProductAdminSimple>;
  selection = new SelectionModel<IProductAdminSimple>(true, []);
  productsToTable: IProductAdminSimple[] = [];
  
  @Input() set products(value : IProductAdminSimple[]){
    this.productsToTable = value;
    this.dataSource = new MatTableDataSource(value)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private core: CoreService) {
    this.dataSource = new MatTableDataSource([] as IProductAdminSimple[])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: IProductAdminSimple): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.idProducto + 1}`;
  }

  clickeado(){
    console.log("Hola a todos");
  }

  delete(){
    this.core.showMessageModal({
      title: "Alerta",
      contentHtml: "Seguro desea eliminar el elemento.",
      primaryButton: {
        name: "Aceptar",
        text: "Aceptar",
        action: () => this.clickeado()
      }
    });
  }

  edit(){
    console.log("accediendo a EDIT");
  }

  viewMore(){
    console.log("accediendo a Ver más");
  }
}