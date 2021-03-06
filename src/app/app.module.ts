import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalcComponent } from './calc/calc.component'
import {HttpClientModule} from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './customer/home/home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LogoutComponent } from './logout/logout.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterationComponent } from './registeration/registeration.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CalcComponent,
    ListUsersComponent,
    LoginComponent,
    HomeComponent,
    AddProductComponent,
    LogoutComponent,
    PipeDemoComponent,
    RegisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
