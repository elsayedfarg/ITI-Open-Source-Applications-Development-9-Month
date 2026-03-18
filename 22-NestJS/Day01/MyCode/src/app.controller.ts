import { AppService } from "./app.service";
import { Controller, Param, Get, Post, Body } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello/:user")
  getHello(@Param("user") user: string) {
    return this.appService.getHello(user);
  }

  @Get("messages")
  getMessage() {
    return this.appService.getMessage();
  }

  @Post("messages")
  createMessage(@Body("text") text: string) {
    return this.appService.addMessage(text);
  }
}

@Controller("users")
export class UsersController {
  private users = [{ id: 1, name: "Alice" }];

  @Get()
  listUsers() {
    return this.users;
  }

  @Post()
  addUser(@Body() user: { name: string }) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }
}
