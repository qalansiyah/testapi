//suggestion:Неизпользуемый файл лучше удалить чтобы не загрязнять проект
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
