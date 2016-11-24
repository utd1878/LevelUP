import { Component } from '@angular/core';
import { LevelService } from './level.service';
import { LoyaltyProgramService } from './loyalty-program.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [
  		LevelService, 
  		LoyaltyProgramService
        ]
})
export class AppComponent {
  title:string = 'Gamification';
  constructor(private levelService : LevelService){
  	this.levelService.loadFromStorage();
  }
}
