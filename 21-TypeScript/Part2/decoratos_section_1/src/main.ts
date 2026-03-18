import { Log } from "./decorators";

class Person {
  @Log
  fName: string;
  @Log
  lName: string;

  constructor(f_name: string, l_name: string) {
    this.fName = f_name;
    this.lName = l_name;
  }
}

const p = new Person("sayed", "mohamed");

p.fName = "new";
p.lName = "user";
