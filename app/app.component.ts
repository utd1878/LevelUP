import { Component } from '@angular/core';
import { LevelService } from './level.service';
import { LoyaltyProgramService } from './loyalty-program.service';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [LevelService, LoyaltyProgramService, CacheService]
})
export class AppComponent {
  title:string = 'Gamification';
  constructor(private levelService : LevelService){
  	this.levelService.loadFromStorage();
  }
}
