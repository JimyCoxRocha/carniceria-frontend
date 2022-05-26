import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';

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
    apellido: [ '', [Validators.required, Validators.minLength(3) ] ],
    cedula: [ null, [Validators.required, Validators.minLength(10), Validators.maxLength(10) ] ],

    user: [ '', [Validators.required, Validators.minLength(3) ] ],
    password: [ null, [Validators.required, Validators.minLength(8) ] ],
    confirmPassword: [ null, [Validators.required ] ]
  },{
    validators: [ this.validator.fieldEquals('password','confirmPassword') ]
  });
  
  constructor(private fb: FormBuilder, private validator: ValidatorService) { }

  ngOnInit(): void {
    const cedula = this.myForm.get('cedula');
    const password = this.myForm.get('password');
  }

  registro(){
    const user = this.myForm.get('user');
    const password = this.myForm.get('password');

    
  }

  fieldIsValid(field: string){
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched
  }

  handlePassword(){
    this.showPassword = !this.showPassword;
  }
  
}
