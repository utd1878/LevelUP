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
var router_1 = require('@angular/router');
var level_service_1 = require('./level.service');
var LevelDetailsComponent = (function () {
    function LevelDetailsComponent(levelService, route, router) {
        this.levelService = levelService;
        this.route = route;
        this.router = router;
        this.displayLogoUrl = 'app/imgs/achievements/';
    }
    LevelDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('getting level with id: ', id);
            _this.level = _this.levelService.get(id);
            _this.displayLogoUrl += _this.level.logo;
        });
    };
    LevelDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LevelDetailsComponent.prototype.gotoLevelsList = function () {
        var link = ['/levels'];
        this.router.navigate(link);
    };
    LevelDetailsComponent.prototype.savePersonDetails = function () {
        this.levelService.save(this.level);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LevelDetailsComponent.prototype, "displayLogoUrl", void 0);
    LevelDetailsComponent = __decorate([
        core_1.Component({
            selector: 'level-details',
            templateUrl: 'app/level-details.component.html'
        }), 
        __metadata('design:paramtypes', [level_service_1.LevelService, router_1.ActivatedRoute, router_1.Router])
    ], LevelDetailsComponent);
    return LevelDetailsComponent;
}());
exports.LevelDetailsComponent = LevelDetailsComponent;
//# sourceMappingURL=level-details.component.js.map