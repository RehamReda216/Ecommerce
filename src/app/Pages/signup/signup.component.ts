import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[AuthService]
})
export class SignupComponent {
    
    constructor(private _AuthService:AuthService, private _Router: Router){}
    isLoading:boolean=false;
    apiError:string= '';
    registerForm:FormGroup = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]), 
      rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
      phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    })

    handleRegister(registerForm:FormGroup)
    {
      this.isLoading = true;
      if(registerForm.valid)
      {
          this._AuthService.register(registerForm.value).subscribe({
            next:(response)=> {
              if(response.message == 'success'){
                this.isLoading=false;
                //Navigate Login
                this._Router.navigate(['/login'])
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
