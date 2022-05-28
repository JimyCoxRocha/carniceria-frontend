import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'admin-sidenav',
  templateUrl: './adm-sidenav.component.html',
  styleUrls: ['./adm-sidenav.component.css']
})
export class AdmSidenavComponent implements OnInit {
  @Output() close = new EventEmitter<Boolean>();

  constructor(
    private auth: AuthService
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
  
  sessionClose(){
    this.closeSideNav(true);
    this.auth.closeSession();
  }

  showFiller = false;
}
