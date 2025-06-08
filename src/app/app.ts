import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlow } from "./control-flow/control-flow";
import { TemplateSyntax } from "./template-syntax/template-syntax";
import { ComponentStyleGuide } from "./component-style-guide/component-style-guide";
import { AngularSignal } from "./angular-signal/angular-signal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlFlow, TemplateSyntax, ComponentStyleGuide, AngularSignal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-20-demo';
}
