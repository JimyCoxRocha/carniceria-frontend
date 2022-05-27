import { Injectable } from '@angular/core';
import { AES, enc } from "crypto-js";


@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  private secretKey = 'UY{?NI8x>9y(Ll';

  constructor() { }

  encrypt(value: string){
    return AES.encrypt(value, this.secretKey).toString();
  }

  decrypt(value: string){
    var bytes  = AES.decrypt(value, this.secretKey);
    return JSON.parse(bytes.toString(enc.Utf8));
  }

}
