import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {
    name: "Joaquim",
    age: 55,
    address: "Rua Fictícia, 55"
  }

  title = 'curso-angular';
}
