import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./websockets/eventos.module";

@Module({
  imports: [EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
