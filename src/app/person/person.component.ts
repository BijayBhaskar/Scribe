import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input('person') person;
  constructor() { }
  getTextSize(person){
        if(person.Country=="IND")
        return '24px';
        else if(person.Country=="AUS")
        return '18px';
      }

  
  ngOnInit(): void {
    console.log(this.person);
  }

}
