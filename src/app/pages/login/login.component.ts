import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message!: String;
  classMessage!: String;

  loginForm: FormGroup = this.formBuilder.group({
    email: [ '', [ Validators.required, Validators.pattern( this.validationFormsService.email ) ] ],
    password: [ '', [ Validators.required, Validators.pattern( this.validationFormsService.pass ) ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private validationFormsService: ValidateFormsService,
    private localstorageService: LocalstorageService
  ) {}

  login() {
    console.log( this.loginForm.value );

    this.authService.login( this.loginForm.value ).subscribe( ( data: boolean ) => {
      console.log( data );
      // Valida si no se logra autenticar el usuario
      if( ! data ) {
        this.classMessage = 'message error';
        this.message = 'Error de autenticacion';
      }
      // Oculta mensaje del formulario
      setTimeout( () => {
        this.classMessage = '';
        this.message = '';
      }, 2000 );


    });

  }
}