import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  caracteres:string[] = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  salas:string[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  generarNuevaSala():string{
    const nuevaSala = [...Array(6)]
        .map((element) => {
          return this.caracteres[Math.random()*this.caracteres.length|0]
        })
        .join('');
    this.salas.push(nuevaSala);
    return nuevaSala;
  }

  comprobarSala(id:string):boolean{
    return this.salas.some(elemento => elemento == id);
  }
}
