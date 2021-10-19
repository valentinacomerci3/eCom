import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//viste, dichiarazione rotte
const routes:Routes=[{
  path: 'products',
  loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
},
{
  path: 'homepage',
  loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
},
{
  path: 'checkout',
  loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule)
},
{
  path: 'cart',
  loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
