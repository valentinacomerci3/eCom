import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { ProductsModule } from './features/products/products.module';

//viste, dichiarazione rotte
const routes:Routes=[{
  path: 'products',
  loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
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
