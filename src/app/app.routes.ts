import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'cart',component:CartComponent},
    {path:'brands',component:BrandsComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotfoundComponent}

];
