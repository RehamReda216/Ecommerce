import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: false,
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  brands:any[] = [];
  constructor(private _ProductsService: ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next:(response) => {this.brands=response.data;}
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
