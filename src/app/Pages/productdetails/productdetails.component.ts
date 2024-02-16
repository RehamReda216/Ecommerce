import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { SeemorePipe } from '../../pipes/seemore/seemore.pipe';

@Component({
  selector: 'app-productdetails',
  standalone: false,
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{

    constructor(private _ActivatedRoute:ActivatedRoute, 
      private _ProductsService:ProductsService){}
    productDetails:any;  
    productId:any;
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((params) =>{
        this.productId= params.get('id');
      });

      this._ProductsService.getProductDetailById(this.productId).subscribe({
        next:(response)=> this.productDetails = response.data 
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
            items: 1
          },
        },
        nav: true
      }
    
}
