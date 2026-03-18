"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = Log;
function Log(target, key) {
    let propertyRef = target[key];
    const setter = (newValue) => {
        console.log(`property ${key} has changed from ${propertyRef} to ${newValue}`);
        propertyRef = newValue;
    };
    const getter = () => propertyRef;
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=log-property.js.map