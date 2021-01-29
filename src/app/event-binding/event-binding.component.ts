import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonName = "My Button";
  count = 0;
  btnEnable = true;
  mode: ProgressSpinnerMode = 'determinate';

  click(){
    console.log("Identify a click action");
  }

  add(){
    this.count ++;
    this.buttonName = "It was clicked " + this.count + " times";
  }

  desabled(){
    this.btnEnable = false;
    this.mode = "indeterminate";
    setTimeout( ()=>{
      this.btnEnable = true;  
      this.mode = "determinate";
    },2000)
  }
}