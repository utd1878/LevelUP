"use strict";
var router_1 = require('@angular/router');
var level_list_component_1 = require('./level-list.component');
var level_details_component_1 = require('./level-details.component');
// Route config let's you map routes to components
var routes = [
    {
        path: 'levels',
        component: level_list_component_1.LevelListComponent
    },
    {
        path: 'levels/:id',
        component: level_details_component_1.LevelDetailsComponent
    },
    {
        path: '',
        redirectTo: '/levels',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map