import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categoryFormat } from '../../interfaces/layout.interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() categoriesAccordion: categoryFormat[] = [];
  @Output() close = new EventEmitter<Boolean>();

  ngOnInit(): void {
    this.close.emit(false);
  }

  closeSideNav(event:any){
    if(event){
      this.close.emit(true);
    }

  }

  showFiller = false;
}
