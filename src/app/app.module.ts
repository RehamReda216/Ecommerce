import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterLink, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

import { AboutComponent } from "./Pages/about/about.component";
import { BrandsComponent } from "./Pages/brands/brands.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { CategoriesComponent } from "./Pages/categories/categories.component";
import { HomeComponent } from "./Pages/home/home.component";
import { LoginComponent } from "./Pages/login/login.component";
import { SignupComponent } from "./Pages/signup/signup.component";
import { FeaturedproductsComponent } from "./theme/featuredproducts/featuredproducts.component";
import { FooterComponent } from "./theme/footer/footer.component";
import { MainsliderComponent } from "./theme/mainslider/mainslider.component";
import { NotfoundComponent } from "./theme/notfound/notfound.component";
import { ProductdetailsComponent } from "./Pages/productdetails/productdetails.component";
import { SeemorePipe } from "./pipes/seemore/seemore.pipe";

import { ProductsService } from "./service/products/products.service";
import { AuthService } from "./service/auth/auth.service";
import { HeaderComponent } from "./theme/header/header.component";
import { SearchPipe } from "./pipes/search/search.pipe";


@NgModule({
  declarations: 
  [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    SignupComponent,
    MainsliderComponent,
    ProductdetailsComponent,
    CategoriesComponent,
    BrandsComponent,FeaturedproductsComponent,SeemorePipe,SearchPipe
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers:[AuthService,ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
 