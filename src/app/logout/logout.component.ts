import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.tsService.success("Your Successfully LoggedOut from System!!!","",{timeOut:3000})
    this.router.navigateByUrl("/login")

  }

}
