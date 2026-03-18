import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  messages: Array<string> = ["sayed"];

  getHello(user: string): string {
    return `Hello ${user}`;
  }

  getMessage(): Array<string> {
    return this.messages;
  }

  addMessage(msg: string) {
    this.messages.push(msg);
    return { status: "ok", message: msg };
  }
}
