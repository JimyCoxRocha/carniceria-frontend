import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  showPassword: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  myForm: FormGroup = this.fb.group({
    user: [ '', [Validators.required, Validators.minLength(3) ] ],
    password: [ '', [Validators.required, Validators.minLength(3) ] ],
  });
  
  ngOnInit(): void {
    const user = this.myForm.get('user');
    const password = this.myForm.get('password');

  }

  login(){
    const user = this.myForm.get('user')?.value;
    const password = this.myForm.get('password')?.value;
    this.auth.login({
      username: user,
      password: password
    });
  }

  fieldIsValid(field: string){
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched
  }


  handlePassword(){
    this.showPassword = !this.showPassword;
  }

  get isLoading(){
    return this.auth._isLoading;
  }
}
