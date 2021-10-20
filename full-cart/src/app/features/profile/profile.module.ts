import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    ProfileRoutingModule
  ],
  declarations: [	ProfileComponent,

   ]
})
export class ProfileModule { }
