import {Body, Controller, Get, Param, Post} from '@nestjs/common';
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

  @Post('crearSala')
  crearSala(@Body() valor){
    this.appService.registrarSala(valor)
  }

  @Get('consultarSala/:idSala')
  consultarSala(@Param() params){
    return {sala:this.appService.consultarSala(params.idSala)}
  }

  @Post('sala/:idSala/unirUsuario')
  agregarUsuario(@Param() params, @Body() valor){
    this.appService.registrarUsuarioEnSala(params.idSala, valor.nombreUsuario)
  }
}
