import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService:SessionService) { }



    firstName:string = "" 
    email:string = ""
    password:string = ""
    role : string = "user"
    firstNameError:string = ""
    emailError:string = ""
    passwordError : string="" 
  ngOnInit(): void {
  }

  saveuser(){
      let isError = false
          if(this.firstName.trim().length == 0){
            this.firstNameError ="Please Enter FirstName"
            isError = true 
          }else{
            this.firstNameError = "" 
          }
          if(this.email.trim().length == 0){
            this.emailError = "Please Enter Email"
            isError = true 
          }else{
            this.emailError = ""
          }
          if(this.password.trim().length == 0){
            this.passwordError = "Please Enter Password"
            isError = true 
          }else{
            this.passwordError = ""
          }
          
          if(isError){
              //error 
          }else{
              //db user save 
              //frontend --> db --> api [ node  ]
              let user = {
                "firstName":this.firstName,
                "email":this.email,
                "password":this.password
              }               
              this.sessionService.signupApi(user).subscribe(resp=>{
                if(resp.status == -1){
                    alert(resp.msg);
                }else{
                    alert(resp.msg);
                }
              })

          }
  }
}
