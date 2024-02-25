import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';
import { response } from 'express';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartDetails:any= null;
    constructor(private _CartService:CartService){}
    removeItem(productId:string)
    {
      this._CartService.removeCartItem(productId).subscribe({
        next:(response) => {
          console.log("item removed")
          this.cartDetails= response.data
          console.log(response.data)
        },
        error:(err) => {console.log(err)}
      })
    }
    UpdateItem(productId:string,count:number)
    {
        this._CartService.updateCartItem(productId,count).subscribe({
          next:(response) => this.cartDetails=response.data,
          error:(err) => console.log(err),
        })
    }
    ngOnInit(): void {
      this._CartService.getLoggedUserCart().subscribe({
        next:(response) => {this.cartDetails=response.data,
          console.log(response.data);},
        error:(err) => {console.log(err)}
      })
    }
}
