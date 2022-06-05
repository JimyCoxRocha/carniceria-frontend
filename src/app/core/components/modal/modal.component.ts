import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalConfigurationInterface } from '../../interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalConfigurationInterface) {}
  hasTitle: boolean = this.data.title ? true : false;
  hasButtonPrimary: boolean = this.data.primaryButton ? true : false;
  hasButtonSecundary: boolean = this.data.secundaryButton ? true : false;

  contentHtml: string = this.data.contentHtml ? this.data.contentHtml : "";

  ngOnInit(): void {
/*     if(this.data.action){
      this.data.action()
    } */
  }
  
  clickPrimaryBtn(){
    if(!this.data.primaryButton 
      || !this.data.primaryButton?.action) return;

      this.data.primaryButton.action();
  }
  
  clickSecundaryBtn(){
    if(!this.data.secundaryButton 
      || !this.data.secundaryButton?.action) return;

      this.data.secundaryButton.action();
  }
}
