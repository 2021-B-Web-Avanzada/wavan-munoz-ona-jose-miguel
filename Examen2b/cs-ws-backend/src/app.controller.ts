import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevaSala')
  getSala(){
    return {idSala: this.appService.generarNuevaSala()};
  }

  @Get(':idSala/verificar')
  verificarSala(@Param() params) {
    return {validez: this.appService.comprobarSala(params.idSala)}
  }

}
