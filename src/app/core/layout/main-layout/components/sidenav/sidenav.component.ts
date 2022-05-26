import { Component, Input, OnInit } from '@angular/core';
import { categoryFormat } from '../../interfaces/layout.interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() categoriesAccordion: categoryFormat[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showFiller = false;
}
