import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-template-syntax',
  imports: [HeaderComponent],
  templateUrl: './template-syntax.html',
  styleUrl: './template-syntax.scss'
})
export class TemplateSyntax {
  base = 3;
  exponent = 4;
  colWidth = 12;
  person = { name: 'Alice', age: 30 };
}
