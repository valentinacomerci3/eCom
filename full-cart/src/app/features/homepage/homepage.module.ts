import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './components/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    HomepageRoutingModule,
    CommonModule,

  ]
})
export class HomepageModule { }
