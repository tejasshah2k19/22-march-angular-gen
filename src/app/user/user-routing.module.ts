import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserGuard } from './user.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: "user", component: UserComponent, children: [
      { path: "home", component: HomeComponent }
    ],canActivate:[UserGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
