import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreakpointsService } from 'src/app/core/services/breakpoints.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  md: boolean = false;
  value3: string = "";
  display: boolean = false;
  items: MenuItem[] = [];
  
  constructor(private router: Router, 
    private bp: BreakpointsService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.items = [
      {
        label:'File',
        icon:'pi pi-fw pi-file',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-plus',
                items:[
                {
                    label:'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                },
                {
                    label:'Video',
                    icon:'pi pi-fw pi-video'
                },

                ]
            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                separator:true
            },
            {
                label:'Export',
                icon:'pi pi-fw pi-external-link'
            }
        ]
    },
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
      }
    ];
  }
  
  brakpoint(point: string){
    return this.bp.breakpoint(point)
  }

  handleUrl(){
    this.router.navigateByUrl("carrito");
  }

  get isAuthUser(){
    return this.auth.isAuthUser();
  }

  get isAdminUser(){
    return this.auth.isAdminUser();
  }
  
  handleUser(){
    this.isAuthUser
      ? this.router.navigate(['/auth/login'])
      : this.router.navigate(['/'])
  }
}
