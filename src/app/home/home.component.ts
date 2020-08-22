import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { SimpleinterestService } from '../simpleinterest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // principal : number ;
  // rate :number ;
  // time : number;
  // si :number;

  constructor(){
    
  }
  // constructor( public fb : FormBuilder , public simpleInterestService : SimpleinterestService ) { }

  ngOnInit(): void {
  }

  // calculate(){
  //   this.si = this.simpleInterestService.calculate(this.principal, this.rate,this.time);
  // }
  // clear(){
  //   this.principal = undefined;
  //   this.rate = undefined;
  //   this.time = undefined;
  //   this.si = undefined;
  // }


}
