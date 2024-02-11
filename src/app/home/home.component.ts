import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products/products.service';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { MainsliderComponent } from '../mainslider/mainslider.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProductdetailsComponent,RouterModule,MainsliderComponent,CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
