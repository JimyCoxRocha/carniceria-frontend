import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/interfaces';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { categoryFormat } from '../../interfaces/layout.interfaces';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() close = new EventEmitter<Boolean>(); 
  @Input() categories: Category[] = [];
  @Input() _isLoadingCategory: boolean = true;


  display: boolean = false;
  constructor(
    private auth: AuthService,
    private _router : Router
  ){}

  ngOnInit(): void {
    

    /* this.close.emit(false); */
  }

  closeSideNav(){
    this.close.emit(true);
  }
}
