import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  showPassword: Boolean = false;

  myForm: FormGroup = this.fb.group({
    email: [ '', [Validators.required, Validators.email ] ],
    name: [ '', [Validators.required, Validators.minLength(4) ] ],
    apellido: [ '', [Validators.required, Validators.minLength(3)] ],
    cedula: [ '', [Validators.required] ],

    user: [ '', [Validators.required, Validators.minLength(3) ] ],
    password: [ null, [Validators.required, Validators.minLength(8) ] ],
    confirmPassword: [ null, [Validators.required ] ]
  },{
    validators: [
      this.validator.fieldEquals('password','confirmPassword'),
      this.validator.identificationValidator('cedula')
    ]
  });
  
  constructor(private fb: FormBuilder, private validator: ValidatorService, private auth: AuthService) { }

  ngOnInit(): void {
    this.myForm.get('cedula')?.valueChanges.subscribe(x => {
      this.onlyNumber(x, 'cedula');
    })

  }

  registro(){
    console.log(this.myForm.valid);
    const password = this.myForm.get('password');
    this.auth.register({
      persona: {
        apellido: this.myForm.get('apellido')?.value!,
        email: this.myForm.get('email')?.value,
        nombre: this.myForm.get('name')?.value,
        idSexo: 1,
        cedula: this.myForm.get('cedula')?.value
      },
      usuario: {
        username: this.myForm.get('user')?.value,
        password: this.myForm.get('password')?.value,
      }
    });
    
  }

  fieldIsValid(field: string){
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched
  }

  handlePassword(){
    this.showPassword = !this.showPassword;
  }
  
  //field: Para cuando ingresemos telefono celular
  onlyNumber(value: string, field: string){
    let newValue = '';
    var pattern = new RegExp(/^-?(0|[1-9]\d*)?$/);
    for (let index = 0; index < value.length; index++) {
      if(pattern.test(value[index]))
        newValue += value[index];
      
      
    }
    this.myForm.get(field)?. setValue(newValue, { emitEvent: false });
      /* 
    console.log(value.match( numberPattern));
     */
  }

  isNumber(evt : KeyboardEvent){
    let charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode != 46 && charCode > 31 
        && (charCode < 48 || charCode > 57))
          return false;

      return true;
  }

  get isLoading(){
    return this.auth._isLoading;
  }
  
}
