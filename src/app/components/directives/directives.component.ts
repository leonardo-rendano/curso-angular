import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size: number = 40

  classes: Array<string> = ["small-text", "green-title"]
  underline: string = "underlined-text"

}
