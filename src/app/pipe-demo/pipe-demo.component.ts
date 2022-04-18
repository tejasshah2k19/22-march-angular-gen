import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  name = "roYal"

  today = new Date()
  fees = 123.45 
  marks = 1234
  amount = 12000
  
  ngOnInit(): void {
  }

}
