import { Injectable, NgModule } from '@angular/core';
import { Level } from './level';

const LEVELS : Level[] = [
      {id: 1, name: 'Bronze', logo:'badge_bronze.png', numberOfCardsRequired:5,rewardEarned:'Amazing Shiz'},
      {id: 2, name: 'Silver', logo:'badge_silver.png', numberOfCardsRequired:25,rewardEarned:'Free stuff'},
      {id: 3, name: 'Gold', logo:'badge_gold.png', numberOfCardsRequired:35,rewardEarned:'VIP Access'}
   ];

@Injectable()
export class LevelService{
  
  getAll(): Level[]{
      return LEVELS.map(p => this.clone(p));
  }

  get(id: number): Level {
      return this.clone(LEVELS.find(l => l.id === id)); 
  }

  save(level: Level){
     let originalLevel = LEVELS.find(l => l.id === level.id);
    if (originalLevel) Object.assign(originalLevel, level);
   
  }
  
  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }

}
