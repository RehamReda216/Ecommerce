import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[AuthService]
})
export class NavbarComponent {

    isLogin:boolean=false;
    constructor(private _AuthService: AuthService)
    {
        _AuthService.userData.subscribe({
          //checks repeatedly on userData
          next:() => {
            if(_AuthService.userData.getValue() !== null)
            {
              console.log('isLogin true');
              this.isLogin = true; 
            }
            else{
              console.log('isLogin false');
              this.isLogin = false;
            }
          }
        })
    }
}
