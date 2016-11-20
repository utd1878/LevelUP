import { Routes, RouterModule } from '@angular/router';

import { LevelListComponent } from './level-list.component';
import { LevelDetailsComponent } from './level-details.component';

// Route config let's you map routes to components
const routes: Routes = [
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
