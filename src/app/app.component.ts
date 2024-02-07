import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth/auth.service';
import { ProductsService } from './service/products/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,BrandsComponent,CartComponent,
    CategoriesComponent,FooterComponent,LoginComponent,NavbarComponent,
    NotfoundComponent,SignupComponent,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AuthService,ProductsService]
})
export class AppComponent {
  title = 'ecommerce';
}
