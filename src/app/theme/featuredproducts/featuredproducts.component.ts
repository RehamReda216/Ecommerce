import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';

@Component({
  selector: 'app-featuredproducts',
  standalone: false,
  templateUrl: './featuredproducts.component.html',
  styleUrl: './featuredproducts.component.css'
})
export class FeaturedproductsComponent implements OnInit{
    products:any[] =[];
    searchTerm:string ='';
    constructor(private _ProductsService:ProductsService){
    }
    ngOnInit():void
    {
      this._ProductsService.getProducts().subscribe({
        next:(response)=> this.products = response.data
      })
    }
}
