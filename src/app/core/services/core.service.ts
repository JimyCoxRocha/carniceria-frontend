import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalConfigurationInterface } from '../interfaces';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private dialog: MatDialog) { }
    
  private _statusLoading = false;
  private _modalError: ModalConfigurationInterface = {};

  get statusLoading(){
    return this._statusLoading;
  }

  changeStatusLoading(){
    this._statusLoading = !this._statusLoading;
  }

  showLoading(){
    this._statusLoading = true;
  }

  hiddenLoading(){
    this._statusLoading = true;
  }

  showErrorModal(title: string, message: string){
    this._modalError.title = title;
    this._modalError.contentHtml = message;
    this._modalError.primaryButton = { text: "Aceptar", name: "btnAceptar" };
    this.dialog.open(ModalComponent, {data: this._modalError, panelClass: "custom-container"})
  }

  showMessageModal(title: string, message: string, textButton: string, nameButton: string, widthModal: string = ''){
    this._modalError.title = title;
    this._modalError.contentHtml = message;
    this._modalError.primaryButton = { text: textButton, name: nameButton };
    this.dialog.open(ModalComponent, {data: this._modalError, width: widthModal, panelClass: "custom-container"})
  }
}
