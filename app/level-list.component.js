"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var level_service_1 = require('./level.service');
var LevelListComponent = (function () {
    function LevelListComponent(levelService) {
        this.levelService = levelService;
        this.levels = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    LevelListComponent.prototype.ngOnInit = function () {
        this.levels = this.levelService.getAll();
        this.isLoading = false;
    };
    LevelListComponent = __decorate([
        core_1.Component({
            selector: 'level-list',
            template: "\n  <section>\n    <section *ngIf=\"isLoading && !errorMessage\">\n    Loading our hyperdrives!!! Retrieving data...\n    </section>\n      <ul>\n        <!-- this is the new syntax for ng-repeat -->\n        <li *ngFor=\"let level of levels\">\n            <a href=\"#\" [routerLink]=\"['/levels', level.id]\">\n          {{level.name}}\n          </a>\n        </li>\n      </ul>\n      <section *ngIf=\"errorMessage\">\n        {{errorMessage}}\n      </section>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [level_service_1.LevelService])
    ], LevelListComponent);
    return LevelListComponent;
}());
exports.LevelListComponent = LevelListComponent;
//# sourceMappingURL=level-list.component.js.map