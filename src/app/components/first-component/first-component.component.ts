import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = "Leonardo"
  age: number = 31
  job: string = "Desenvolvedor"
  hobbies: Array<string> = [ "treinar", "estudar" ]
  car = {
    name: "BMW",
    model: "M3-GTR"
  }

  constructor() {

  }
}
