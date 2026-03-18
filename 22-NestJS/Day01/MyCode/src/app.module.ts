import { Module } from "@nestjs/common";
import { AppController, UsersController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
