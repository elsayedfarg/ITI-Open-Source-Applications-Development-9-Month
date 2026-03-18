import {
  Module,
  Controller,
  Injectable,
  Scope,
  Get,
  Post,
  Delete,
  Patch,
  Put
} from "@nestjs/common"; // Framework level roles
import { NestFactory } from "@nestjs/core"; // facade layer and compiplation layer of nestjs modules // isolation level of the platform level
import { NestExpressApplication } from "@nestjs/platform-express";

@Injectable({
  scope: Scope.DEFAULT, // singleton
})
export class AppService {
  sayHello() {
    return "hello world";
  }
}

@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello() {
    return this.appService.sayHello();
  }
}

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000, () => {
    console.log(`App started and running and listening on port 3000`);
  });
}

bootstrap();
