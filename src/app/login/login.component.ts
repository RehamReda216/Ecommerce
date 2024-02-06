import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router: Router)
  {

  }
  isLoading:boolean=false;
  apiError:string= '';
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]), 
  })

  handleLogin(loginForm:FormGroup)
  {
    debugger
    this.isLoading = true;
    if(loginForm.valid)
    {
        this._AuthService.login(loginForm.value).subscribe({
          next:(response)=> {
            if(response.message == 'success')
            {
              localStorage.setItem('userToken',response.token);
              this._AuthService.decodeUserData();
              this.isLoading=false;
              //Navigate Login
              this._Router.navigate(['/home'])
            }
          },
          error:(err) => {
            this.isLoading=false;
            this.apiError= err.error.message;
          }
        })
    }
  }
}
