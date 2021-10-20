import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
  ]
})
export class ProductsModule { }
