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
var LEVELS = [
    { id: 1, name: 'Bronze', logo: 'badge_bronze.png', numberOfCardsRequired: 5, rewardEarned: 'Amazing Shiz' },
    { id: 2, name: 'Silver', logo: 'badge_silver.png', numberOfCardsRequired: 25, rewardEarned: 'Free stuff' },
    { id: 3, name: 'Gold', logo: 'badge_gold.png', numberOfCardsRequired: 35, rewardEarned: 'VIP Access' }
];
var LevelService = (function () {
    function LevelService() {
    }
    LevelService.prototype.getAll = function () {
        var _this = this;
        return LEVELS.map(function (p) { return _this.clone(p); });
    };
    LevelService.prototype.get = function (id) {
        return this.clone(LEVELS.find(function (l) { return l.id === id; }));
    };
    LevelService.prototype.save = function (level) {
        var originalLevel = LEVELS.find(function (l) { return l.id === level.id; });
        if (originalLevel)
            Object.assign(originalLevel, level);
    };
    LevelService.prototype.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    LevelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LevelService);
    return LevelService;
}());
exports.LevelService = LevelService;
//# sourceMappingURL=level.service.js.map