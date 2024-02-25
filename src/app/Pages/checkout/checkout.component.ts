import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../service/cart/cart.service';
import { response } from 'express';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
     shippingAddress:FormGroup =new FormGroup({
      details: new FormControl(null),
      phone: new FormControl(null),
      city:new FormControl(null)
     })
     constructor(private _CartService:CartService){}
     navigateToUrl(url:string){
          window.location.href = url;
     }
     handleSubmit(shippingAddress:FormGroup){
        console.log(shippingAddress.value);
        this._CartService.onlinePayment(shippingAddress.value,"65d5fc4e9c86f600342a4faa").subscribe({
            next:(response:any)=> { this.navigateToUrl(response.session.url)},
            error :(err)=> console.log(err)
        })
     }
}
