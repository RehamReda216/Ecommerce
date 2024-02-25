import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { CartService } from '../../service/cart/cart.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products:any[] =[];
  searchTerm:string ='';
  constructor(private _ProductsService:ProductsService,private _CartService:CartService){}
  addToCart(productId:string)
  {    
      this._CartService.addToCart(productId).subscribe({
        next:(response) => {
          this._CartService.numberOfCartItems.next(response.numberOfCartItems)
          console.log(response)},
        error:(err)=> console.log(err)
      })  
  }
  ngOnInit():void
  {
    this._ProductsService.getProducts().subscribe({
      next:(response)=> this.products = response.data
    })
  }
}
