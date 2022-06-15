import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'app-content-admin-edit',
  templateUrl: './content-admin-edit.component.html',
  styleUrls: ['./content-admin-edit.component.css']
})
export class ContentAdminEditComponent implements OnInit {
  @ContentChildren("main") content!: QueryList<"main">;
  @Input() isLoading: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
