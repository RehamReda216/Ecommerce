import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
    categories:any[] = [];
    constructor(private _ProductsService: ProductsService){}
    ngOnInit(): void {
      this._ProductsService.getCategories().subscribe({
        next:(response) => {this.categories=response.data;}
      })
    }
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 7
        },
      },
      nav: true
    }
}
