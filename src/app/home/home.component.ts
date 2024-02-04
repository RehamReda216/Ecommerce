import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[ProductsService]
})
export class HomeComponent implements OnInit {
    products:any[] =[];
    constructor(private _ProductsService:ProductsService){
    }
    ngOnInit():void
    {
      this._ProductsService.getProducts().subscribe({
        next:(response)=> this.products = response.data
      })
    }
}
