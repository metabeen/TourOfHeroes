"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Magneto'),
            new hero_1.Hero(13, 'Wolverine'),
            new hero_1.Hero(15, 'Mystic'),
            new hero_1.Hero(20, 'Professor X')
        ];
        this.myHero = this.heroes[0];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<h1>{{title}}</h1>\n<h2>My favorite hero is: {{myHero.name}}</h2>\n<p>Heroes:</p>\n\t<ul>\n\t\t<li *ngFor=\"let hero of heroes\">\n\t\t{{hero.name}}\n\t\t</li>\n\t</ul>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map