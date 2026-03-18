export function Log<T extends Object>(target: T, key: keyof T) {
  let propertyRef = target[key];

  const setter = (newValue: T[keyof T]) => {
    console.log(
      `property ${key as string} has changed from ${propertyRef} to ${newValue}`,
    );
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
