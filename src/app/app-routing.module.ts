import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { BrandsComponent } from './Pages/brands/brands.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { CartComponent } from './Pages/cart/cart.component';
import { LoginComponent } from './Pages/login/login.component';
import { NotfoundComponent } from './theme/notfound/notfound.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { authGuard } from './guard/auth.guard';
import { ProductdetailsComponent } from './Pages/productdetails/productdetails.component';

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
    {path:'settings',loadChildren:()=> import('./Pages/settings/settings.module').then((m)=>m.SettingsModule)},
    {path:'**',component:NotfoundComponent} 


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}