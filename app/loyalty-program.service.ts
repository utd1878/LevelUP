import { Injectable } from '@angular/core';
import { LoyaltyProgram } from './loyalty-program';

const PROGRAMS : LoyaltyProgram[] = [
      {id: 1, name: 'Cupcakes'},
      {id: 2, name: 'Drinks'},
      {id: 3, name: 'Desserts'}
   ];

@Injectable()
export class LoyaltyProgramService{
  
  getAll(): LoyaltyProgram[]{
      return PROGRAMS.map(p => this.clone(p));
  }

  get(id: number): LoyaltyProgram {
      return this.clone(PROGRAMS.find(l => l.id === id)); 
  }

  save(level: LoyaltyProgram){
     let originalLevel = PROGRAMS.find(l => l.id === level.id);
    if (originalLevel) Object.assign(originalLevel, level);
   
  }
  
  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }

}
