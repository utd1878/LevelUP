import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { LevelListComponent } from './level-list.component';
import { LevelDetailsComponent } from './level-details.component';
import { AddLevelComponent } from './add-level.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule],
  declarations: [ AppComponent, LevelListComponent, LevelDetailsComponent, AddLevelComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
