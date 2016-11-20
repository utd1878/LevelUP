import { Component } from '@angular/core';
import { LevelService } from './level.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [LevelService]
})
export class AppComponent {
  title:string = 'Gamification';
}
