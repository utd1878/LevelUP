import { Routes, RouterModule } from '@angular/router';

import { LevelListComponent } from './level-list.component';
import { LevelDetailsComponent } from './level-details.component';
import { AddLevelComponent } from './add-level.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'addlevel',
    component: AddLevelComponent
  },
  {
    path: 'levels',
    component: LevelListComponent
  },
  {
    path: 'levels/:id',
    component: LevelDetailsComponent
  },
 
  {
    path: '',
    redirectTo: '/levels',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
