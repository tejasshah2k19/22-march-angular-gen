import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private tsService:ToastrService) {
    this.myForm = new FormGroup({
      firstName: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      contactNum: new FormControl("",Validators.required)
    })
  }

  myForm: FormGroup
  ngOnInit(): void {

  }

  saveUser(){
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    if(this.myForm.valid){
      //api save 
    }else{
      this.tsService.error("Please Fill All Data","",{timeOut:3000})
    }
    
  }
}
