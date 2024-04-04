//suggestion:Неизпользуемый файл лучше удалить чтобы не загрязнять проект
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiExcludeEndpoint } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiExcludeEndpoint()
  getHello(): string {
    return this.appService.getHello();
  }
}
