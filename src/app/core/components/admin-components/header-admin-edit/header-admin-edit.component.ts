import { Component, Input, OnInit } from '@angular/core';
import { IHeaderAdminEdit } from '../interfaces/header.interface';


@Component({
  selector: 'app-header-admin-edit',
  templateUrl: './header-admin-edit.component.html',
  styleUrls: ['./header-admin-edit.component.css']
})
export class HeaderAdminEditComponent implements OnInit {
  //editar en caso de ser necesario para 
  @Input() content!: IHeaderAdminEdit;
  @Input() isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
