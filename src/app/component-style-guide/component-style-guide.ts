import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-style-guide',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './component-style-guide.html',
  styleUrl: './component-style-guide.scss'
})
export class ComponentStyleGuide {

  myCode = {
    "@schematics/angular:component": { type: "component", style: "scss" },
    "@schematics/angular:directive": { type: "directive" },
    "@schematics/angular:service": { type: "service" },
    "@schematics/angular:guard": { typeSeparator: "." },
    "@schematics/angular:interceptor": { typeSeparator: "." },
    "@schematics/angular:module": { typeSeparator: "." },
    "@schematics/angular:pipe": { typeSeparator: "." },
    "@schematics/angular:resolver": { typeSeparator: "." }
  }
}
