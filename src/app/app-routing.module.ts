import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './component/authentication.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { LoginComponent } from './component/login/login.component';
import { OrderplacedsuccessfullyComponent } from './component/orderplacedsuccessfully/orderplacedsuccessfully.component';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { SignupComponent } from './component/signup/signup.component';


const routes: Routes = [
  { path:'', redirectTo:"/login", pathMatch:'full'}, 
  { path:'signup',component:SignupComponent},
  { path:'login',component:LoginComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
   
  children:[
   { path:'', redirectTo:"/dashboard/getallbooks", pathMatch:'full'},
   { path:'getallbooks',component:GetallbooksComponent},
   { path:'quickview/:bookId',component:QuickviewComponent}, 
   { path:'getcart',component:GetcartComponent},
   { path:'getwishlist',component:GetwishlistComponent},
   { path:'orderplacedsuccessfully',component:OrderplacedsuccessfullyComponent},

  
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
