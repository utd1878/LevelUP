import { Injectable } from '@angular/core';
import { Level } from './level';

import { LoyaltyProgram } from './loyalty-program';
import { LoyaltyProgramService } from './loyalty-program.service';

import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';


const LEVELS : Level[] = [
      {id: 1, name: 'Bronze', logo:'badge_bronze.png', numberOfCardsRequired:5,rewardEarned:'Amazing Shiz',loyaltyPrograms:[1,2]},
      {id: 2, name: 'Silver', logo:'badge_silver.png', numberOfCardsRequired:25,rewardEarned:'Free stuff',loyaltyPrograms:[2]},
      {id: 3, name: 'Gold', logo:'badge_gold.png', numberOfCardsRequired:35,rewardEarned:'VIP Access',loyaltyPrograms:[2,3]}
   ];

declare var BUILD_VERSION: string;

@Injectable()
export class LevelService{
  
  constructor (private loyaltyService : LoyaltyProgramService, private _cacheService: CacheService){}


  getAll(): Level[]{
      return LEVELS.map(p => this.clone(p));
  }

  get(id: number): Level {
      return this.clone(LEVELS.find(l => l.id === id)); 
  }

  save(level: Level){
     let originalLevel = LEVELS.find(l => l.id === level.id);
    if (originalLevel) Object.assign(originalLevel, level);

    this.saveStorage();
  }

  add(level: Level){
    var nextId = Math.max.apply(Math,LEVELS.map(function(o){return o.id;})) + 1;
    level.id = nextId;
    LEVELS.push(level);
    this.saveStorage();
  }

  private saveStorage(){
    this._cacheService.setGlobalPrefix('');
 
    //put some data to cache "forever"
    //returns true is data was cached successfully, otherwise - false
    let result: boolean = this._cacheService.set('levels', LEVELS);

  }

  loadFromStorage(){
    let data: any = this._cacheService.get('levels');
    if(data != null){
      LEVELS.length = 0;
      LEVELS.push(data);
    }
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
