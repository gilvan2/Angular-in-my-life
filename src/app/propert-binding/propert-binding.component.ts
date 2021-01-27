import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-binding',
  templateUrl: './propert-binding.component.html',
  styleUrls: ['./propert-binding.component.css']
})
export class PropertBindingComponent implements OnInit {

  constructor() { }

  color = "accent";

  btnDisabled = true;

  colors = ["","primary","accent","warn",];

  idx = 0;

  ngOnInit(): void {

    setInterval(()=>{
      this.idx = ( ++ this.idx ) % this.colors.length; 
    },500)
  }

}
