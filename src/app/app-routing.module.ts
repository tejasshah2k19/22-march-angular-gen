import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './customer/home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "calc", component: CalcComponent },
  { path: "listusers", component: ListUsersComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "adduser", component: AddProductComponent },
  { path: "logout", component: LogoutComponent }


  ,
  { path: "home", component: HomeComponent },
  { path: "pipe-demo", component: PipeDemoComponent },
  {path:"register",component:RegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
