import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss'
})
export class ControlFlow {
  isLoggedIn = true;
  items = ['Apple', 'Banana', 'Cherry'];
  color = 'blue';
}
