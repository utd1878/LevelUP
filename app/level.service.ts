import { Injectable } from '@angular/core';
import { Level } from './level';

import { LoyaltyProgram } from './loyalty-program';
import { LoyaltyProgramService } from './loyalty-program.service';


const LEVELS : Level[] = [
      {id: 1, name: 'Bronze', logo:'badge_bronze.png', numberOfCardsRequired:5,rewardEarned:'Amazing Shiz',loyaltyPrograms:[1,2]},
      {id: 2, name: 'Silver', logo:'badge_silver.png', numberOfCardsRequired:25,rewardEarned:'Free stuff',loyaltyPrograms:[2]},
      {id: 3, name: 'Gold', logo:'badge_gold.png', numberOfCardsRequired:35,rewardEarned:'VIP Access',loyaltyPrograms:[2,3]}
   ];

@Injectable()
export class LevelService{
  
  constructor (private loyaltyService : LoyaltyProgramService){}


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

  getLoyaltyPrograms(id: number): LoyaltyProgram[]{
    let lp: LoyaltyProgram[] = [];
    let level: Level = this.get(id);

    for(var p in level.loyaltyPrograms){
      lp.push(this.loyaltyService.get( level.loyaltyPrograms[p] ));
    }

    return lp;
  }
  
  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }

}
