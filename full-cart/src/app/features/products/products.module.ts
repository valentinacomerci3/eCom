import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SingleproductComponent } from './components/singleproduct.component';



@NgModule({
  declarations: [
    ProductsComponent,
    SingleproductComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
  ]
})
export class ProductsModule { }
