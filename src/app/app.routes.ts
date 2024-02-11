import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './guard/auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [

    {path:'',redirectTo:'signup',pathMatch:'full'},
    {path:'home',canActivate:[authGuard],component:HomeComponent},
    {path:'about',canActivate:[authGuard],component:AboutComponent},
    {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
    {path:'cart',canActivate:[authGuard],component:CartComponent},
    {path:'productdetails/:id',canActivate:[authGuard],component:ProductdetailsComponent},
    {path:'brands',canActivate:[authGuard],component:BrandsComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotfoundComponent}

];
