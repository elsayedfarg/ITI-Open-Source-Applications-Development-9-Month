"use strict";
// #region primitive types
Object.defineProperty(exports, "__esModule", { value: true });
// const myName: string = "sayed mohamed";
// const myNum: number = 123;
// const myBoolean: boolean = true;
// const myNull: null = null;
// const myUndefined: undefined = undefined;
// #endregion
// #region functions
// in normal js syntax
// function filterArray(arr, predicate) {
//   arr.filter(predicate);
// }
// const result = filterArray(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   (item) => item % 2 == 0,
// );
// type script syntax
// function filterArray(
//   //   arr: Array<number>,
//   arr: number[],
//   predicate: (element: number) => boolean,
// ) {
//   return arr.filter(predicate);
// }
// const result = filterArray([1, 2, 3, 4, 5], (number) => number % 2 == 0);
// console.log(result);
// function filterArrayV2(arr: number[], predicate: (element: number) => boolean) {
//   const result: number[] = [];
//   for (const item of arr) {
//     if (predicate(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// const result2 = filterArrayV2([1, 2, 3, 4, 5], (number) => number % 2 == 0);
// console.log(result2);
// #endregion
// #region callbacks
// // Example 1
// function sayHelloThenDoSomething(callback: (input?: unknown) => void) {
//   console.log("Hello");
//   callback("this is the call back line");
// }
// sayHelloThenDoSomething((input) => console.log(input));
// // Example 2
// function sayHelloThenCompleteTheEquation(
//   callback: (arr: Array<number>) => Array<number>,
// ) {
//   console.log("Hello");
//   const result = callback([1, 2, 3, 4, 5, 6, 7, 8]);
//   console.log("Result:", result);
// }
// sayHelloThenCompleteTheEquation((arr: Array<number>) =>
//   arr.filter((item) => item % 2 == 0),
// );
// // Example 3
// const processStringArray = function (
//   callback: (strArray: Array<string>) => string,
// ) {
//   const result: string = callback(["Sayed", "Mohamed", "Sayed", "test"]);
//   console.log(result);
// };
// processStringArray((arr: Array<string>) =>
//   arr.reduce((a, b) => (a.length > b.length ? a : b)),
// );
// #endregion
// #region interfaces
// interface User {
//   id: string;
//   email: string;
//   createDate: Date;
//   doSomething: () => void;
// }
// const user: User = {
//   id: "",
//   email: "sayed@yahoo.com",
//   createDate: new Date("07-09-2003"),
//   doSomething: function (): void {
//     console.log("Done");
//   },
// };
// class AdminUser implements User {
//   id: string = "";
//   email: string = "";
//   createDate: Date = new Date();
//   doSomething = () => {
//     console.log("Admin done");
//   };
// }
// const admin = new AdminUser();
// admin.doSomething();
// #endregion
// #region Generics
// class MyCustomArray<T> {
//   private readonly arr: T[];
//   constructor(initArr: T[]) {
//     this.arr = initArr || [];
//   }
//   filter(predicate: (element: T) => boolean): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < this.arr.length; i++) {
//       const item = this.arr[i];
//       if (item !== undefined && predicate(item)) {
//         result.push(item);
//       }
//     }
//     return result;
//   }
// }
// const myArr = new MyCustomArray([1, 2, 3, 4, 5, 6]);
// const res = myArr.filter((e) => e % 2 === 0);
// console.log(res);
// #endregion
// #region Literal Objects
// const literalPerson: Record<string, unknown> = {
//   fName: "Sayed",
//   lName: "Mohamed",
// };
// console.log(literalPerson);
// #endregion
// #region Decorators
function sayYes() {
    console.log("Yes");
}
function sayYesAnDoSomeThingDecorator(sayYes, myCustomFunc) {
    sayYes();
    myCustomFunc && myCustomFunc();
}
sayYesAnDoSomeThingDecorator(sayYes, function () {
    console.log("My custom decorator");
});
// #endregion
//# sourceMappingURL=main.js.map