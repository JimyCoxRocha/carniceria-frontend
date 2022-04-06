import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input("title") title: string = "";
  @Input("titleBtn") titleBtn: string = "";
  @Input("url") url: string = "";
  
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  handleUrl(){
    console.log("sf");
    this.router.navigateByUrl("/team/33/user/11");
  }
}
