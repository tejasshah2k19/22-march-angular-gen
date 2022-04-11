import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = ""
  password: string = ""

  constructor(private sessionService: SessionService,private router:Router,private tsService:ToastrService) { }

  ngOnInit(): void {
  }


  login() {
    let user = {
      "email": this.email,
      "password": this.password
    }

    this.sessionService.loginApi(user).subscribe(resp => {
      if (resp.status == 200) {
       console.log(resp.data);
       
        this.tsService.success(resp.msg,"",{timeOut:3000})

        if(resp.data.role.roleName == "customer"){
          localStorage.setItem("firstName",resp.data.firstName)
          this.router.navigateByUrl("/user/home")
       
        }
        
      } else {
        this.tsService.error(resp.msg,"",{timeOut:3000})
      
      }

    }, err => {

    })
  }
}
