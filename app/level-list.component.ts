import { Component, OnInit, NgModule } from '@angular/core';
import { Level } from './level';
import { LevelService } from './level.service';

@Component({
  selector: 'level-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let level of levels">
            <a href="#" [routerLink]="['/levels', level.id]">
          {{level.name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class LevelListComponent implements OnInit{
  levels: Level[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private levelService : LevelService){ }

  ngOnInit(){
    this.levels = this.levelService.getAll();
    this.isLoading = false;
  }
}
