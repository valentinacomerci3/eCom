import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
