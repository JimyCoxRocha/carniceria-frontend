import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { IMenu } from '../../../../../modules/auth/interfaces/menu.interface';


@Component({
  selector: 'admin-sidenav',
  templateUrl: './adm-sidenav.component.html',
  styleUrls: ['./adm-sidenav.component.css']
})
export class AdmSidenavComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Output() close = new EventEmitter<Boolean>();
  moduleSelected: number = 0;
  optionSelected: string = '0';

  menu: IMenu[] = [];
  show: boolean = false;

  constructor(
    private auth: AuthService
  ){}

  ngOnInit(): void {
    this.close.emit(false);
    this.menu = this.auth.getMenu();
  }

  closeSideNav(event:any){
    if(event){
      this.close.emit(true);
    }
  }

  get isAuthUser(){
    return this.auth.isAuthUser();
  }
  
  sessionClose(){
    this.closeSideNav(true);
    this.auth.closeSession();
  }

  showFiller = false;

  handleMenuOptionClick(idModule: number, idOption: number){
    this.moduleSelected = idModule;
    this.optionSelected = idModule + '' + idOption;
    this.close.emit(true);
  }
  handleMenuModuleClick(idModule: number){
    this.moduleSelected = idModule;
    this.optionSelected = '0';
    this.accordion.closeAll();
    this.close.emit(true);
  }
}
