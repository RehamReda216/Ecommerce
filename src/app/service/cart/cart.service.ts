import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numberOfCartItems = new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) 
  { 
    this.getLoggedUserCart().subscribe({
      next:(response) => {
        this.numberOfCartItems.next(response.numberOfCartItems)
        console.log(response)},
      error:(err) => console.log(err)
    })
  }
  headers:any ={
    token: localStorage.getItem('userToken')
  }
  addToCart(productId:string):Observable<any>
  {
      return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
      {productId:productId})
  }
  getLoggedUserCart():Observable<any>
  {
      return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`)
  }
  removeCartItem(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`)
  }
  updateCartItem(productId:string, count:number):Observable<any>
  {
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      { count:count})
  }
  onlinePayment(shippingAddress: any,cartId:string){
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress:shippingAddress})
  }
}
