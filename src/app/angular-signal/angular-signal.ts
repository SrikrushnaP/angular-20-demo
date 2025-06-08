import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-angular-signal',
  imports: [HeaderComponent],
  templateUrl: './angular-signal.html',
  styleUrl: './angular-signal.scss'
})
export class AngularSignal {
  counter = signal(0);
  doubleCount = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(c => c + 1);
  }
}
