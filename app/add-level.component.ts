import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Level } from './level';
import { LevelService } from './level.service';

import { LoyaltyProgram } from './loyalty-program';
import { LoyaltyProgramService } from './loyalty-program.service'

@Component({
  selector: 'add-level',
  template: `
  <h2>Add New Level</h2>
    <form (ngSubmit)="saveLevelDetails()" #levelForm="ngForm">
        <div>
            <label for="name">Name: </label>
            <input type="text" name="name" required [(ngModel)]="level.name" #name="ngModel">
            <div [hidden]="name.valid || name.pristine" class="error">
                Name is required my good sir/lady!
            </div>
      </div>
      <div>
        <label for="rewardEarned">What reward does this level give: </label>
        <input type="text" name="rewardEarned" [(ngModel)]="level.rewardEarned">
      </div>
      <div>
        <label for="numberOfCardsRequired">Required Cards for this level: </label>
        <input type="number" name="numberOfCardsRequired" [(ngModel)]="level.numberOfCardsRequired">
      </div>
      <div>
        <label for="logo">Level Logo: </label>
        <input type="text" name="logo" [(ngModel)]="level.logo">
      </div>
      <h3>Update Loyalty Programs that can be used to earn this level</h3>
      <div *ngFor="let program of programs">
          <label>
              <input type="checkbox"
                     name="loyaltyPrograms"
                     value="{{program.id}}"
                     (change)="updateLevelProgram(program.id, $event)"
              />
              {{program.name}}
          </label>
      </div>
      <p></p>
      <button type="submit" [disabled]="!levelForm.form.valid">Save</button>
  `
})
export class AddLevelComponent implements OnInit{
  level: Level;
  programs: LoyaltyProgram[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private levelService : LevelService,
              private loyaltyService: LoyaltyProgramService,
                private router: Router){ }

  ngOnInit(){ 
    this.level = {
      id: 0,
      name: '',
      logo: '',
      rewardEarned: '',
      numberOfCardsRequired: 0,
      loyaltyPrograms: []
    }
    this.programs = this.loyaltyService.getAll();
  }

  updateLevelProgram(id: number, event: any){
      var inLevelIndex = this.level.loyaltyPrograms.indexOf(id);
      if(event.target.checked && inLevelIndex < 0){
        this.level.loyaltyPrograms.push(id);
      } else if (!event.target.checked && inLevelIndex >= 0){
        this.level.loyaltyPrograms.splice(inLevelIndex, 1);
      }
  }

  saveLevelDetails(){
      this.levelService.add(this.level);

      let link = ['/levels', this.level.id];
      this.router.navigate(link);
  }
}
