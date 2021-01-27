import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonName = "My Button"
  count = 0;

  click(){
    console.log("Clicou");
  }

  add(){
    this.count ++;
    this.buttonName = "It was clicked " + this.count + " times";
  }

}
