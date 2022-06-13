import { AfterViewInit, Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { CoreService } from '../../../../../core/services/core.service';
import { IProductAdminSimple } from '../../interfaces/product-admin.interface';


@Component({
  selector: 'app-admin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
      'select', 'titulo', 'imgUrl',
      'status', 'stock', 'categorias', 
      'promociones'
  ];
  
  dataSource: MatTableDataSource<IProductAdminSimple>;
  selection = new SelectionModel<IProductAdminSimple>(true, []);
  productsToTable: IProductAdminSimple[] = [];
  sortedData: IProductAdminSimple[];

  @Input() set products(value : IProductAdminSimple[]){
    this.productsToTable = value;
    this.dataSource = new MatTableDataSource(value)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private core: CoreService) {
    this.dataSource = new MatTableDataSource([] as IProductAdminSimple[]);
    this.sortedData = this.productsToTable.slice();
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
    this.selection.clear();
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

  clickRow(e:any){
    //selection.toggle(row)
    console.log(e);
  }

  sortData(sort: Sort) {
    const data = this.productsToTable.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titulo':
          const val = compare(a.titulo, b.titulo, isAsc);
          return val;
        case 'stock':
          return compare(a.stock, b.stock, isAsc);
        case 'categorias':
          return compare(a.nameCategories.join(', '), b.nameCategories.join(', '), isAsc);
        case 'promociones':
          return compare(a.namePromotion, b.namePromotion, isAsc);
        default:
          return 0;
      }
    });

    this.dataSource = new MatTableDataSource(this.sortedData);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}