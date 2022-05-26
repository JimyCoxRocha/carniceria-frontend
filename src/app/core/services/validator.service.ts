import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  fieldEquals( field1: string, field2: string ){
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const first = formGroup.get(field1)?.value;
      const second = formGroup.get(field2)?.value;

      if(first !== second ){
        formGroup.get(field2)?.setErrors({ noEquals: true });
        return { noEquals: true }
      }
      
      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }
}
