import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
    
    isLogin:boolean=false;
    logOut(){
      this._AuthService.logOut();
    }    
    constructor(private _AuthService: AuthService)
    {
      debugger
        _AuthService.userData.subscribe({
          //checks repeatedly on userData
          next:() => {
            var auth=_AuthService.userData.getValue();
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
