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
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
class Person {
    constructor(f_name, l_name) {
        this.fName = f_name;
        this.lName = l_name;
    }
}
__decorate([
    decorators_1.Log,
    __metadata("design:type", String)
], Person.prototype, "fName", void 0);
__decorate([
    decorators_1.Log,
    __metadata("design:type", String)
], Person.prototype, "lName", void 0);
const p = new Person("sayed", "mohamed");
p.fName = "new";
p.lName = "user";
//# sourceMappingURL=main.js.map