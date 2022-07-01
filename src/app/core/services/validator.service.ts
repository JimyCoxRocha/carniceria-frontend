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

  identificationValidator( field: string ){
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const identificationField = '' + formGroup.get(field)?.value;

      if(!this.isValidIdentification(identificationField)){
        formGroup.get(field)?.setErrors({ inValid: true });
        return { noEquals: true }
      }
      
      formGroup.get(field)?.setErrors(null);
      return null;
    }
  }


  isValidIdentification(identificacion: string): boolean {
    identificacion =  identificacion.trim();
    let tipoPersona = identificacion[2];
    let digitoVerificador = identificacion[9];
    let resultado = '';
    
    const reglasIdentificacion = {
      coeficientes_cedul: [2, 1, 2,1,2,1,2,1,2], // ESTA ES LA REGLA DEL SRI PARA EL TERCER DIGIRTO DE LA CEDULA
      terminacionesRUC: ['001', '002', '003'],
      cantProv: 24,
      numerosProvinciaValidos: [30]
    }
    
    if(identificacion.length != 10) return false;

    //Aquí validamos provincia
    var dosprimerosdigitos = parseInt(identificacion.substring(0, 2));

    if(dosprimerosdigitos != 30 && (dosprimerosdigitos < 0 || dosprimerosdigitos > reglasIdentificacion.cantProv))
     return false;

    if(parseInt(tipoPersona) < 0 || parseInt(tipoPersona) > 6 )
      return false;

    resultado = this.calcularAcumuladoCedula(identificacion, reglasIdentificacion.coeficientes_cedul, 10);

    if(resultado != digitoVerificador)
      return false;

    return true;
  }

  calcularAcumuladoCedula(cadena: string, coeficiente: number[], regla: number): string{
    let acumulado = 0;
    let instancia = 0;
    for(let i = 0; i < coeficiente.length; i++){
      instancia = coeficiente[i] * parseInt(cadena[i]);
      if(instancia > 9) instancia -= 9;
      acumulado += instancia;
    }
    let resto = acumulado % regla;
    if(resto == 0)
      return '0';

    return (regla - resto).toString();
  }


  validateRange(value: number, number: {max: number, min: number}){
    const sanitize = value > number.max 
    ? number.max
    : value < number.min
      ? number.min
      : value;
    return sanitize
  }
}
