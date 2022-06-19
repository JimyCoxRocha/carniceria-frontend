import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { categoryFormat } from '../../interfaces/layout.interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() categoriesAccordion: categoryFormat[] = [];
  @Output() close = new EventEmitter<Boolean>();

  constructor(
    private auth: AuthService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.close.emit(false);
  }

  closeSideNav(event:any){
    if(event){
      this.close.emit(true);
    }
  }

  get isAuthUser(){
    return this.auth.isAuthUser();
  }

  get isAdminUser(){
    return this.auth.isAdminUser();
  }

  get userName(){
    return this.auth.userName;
  }
  
  sessionClose(){
    this.closeSideNav(true);
    this.auth.closeSession();
  }

  showFiller = false;
}
