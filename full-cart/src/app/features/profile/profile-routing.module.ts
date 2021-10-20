import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
