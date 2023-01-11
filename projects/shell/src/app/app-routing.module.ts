import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'order', loadChildren: () => import('./../../../order/src/app/order-details/order-details.module').then(m => m.OrderDetailsModule) },
  { path: 'register', loadChildren: () => import('./../../../register/src/app/user-register/user-register.module').then(m => m.UserRegisterModule)},
  { path: 'login', loadChildren: () => import('./../../../login/src/app/user-login/user-login.module').then(m => m.UserLoginModule)},
  { path: 'posts', loadChildren: () => import('./../../../posts/src/app/post-list/post-list.module').then(m => m.PostListModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
