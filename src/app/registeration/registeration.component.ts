import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor() { }
  hobby = ["w","f","i"]  
  ngOnInit(): void {
  }

  printData(){
    console.log(this.hobby);
  
    for(let i=0;i<this.hobby.length;i++){
      //true - > 
    }
  }
}
