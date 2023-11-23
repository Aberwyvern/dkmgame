import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
  ],
  template: `
      <section class="content">
        <app-home></app-home>
      </section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'What do you know about any DKM?';
}
