import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() userData: {name: string, age: number, address: string} = {
    name: '',
    age: 0,
    address: ''
  }

}
