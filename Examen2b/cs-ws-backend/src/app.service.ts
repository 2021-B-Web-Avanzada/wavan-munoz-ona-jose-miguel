import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {

  caracteres:string[] = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  salas:{idSala:string, baraja:string, usuarios?:string[]}[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  generarNuevaSala():string{
    return [...Array(6)]
        .map((element) => {
          return this.caracteres[Math.random() * this.caracteres.length | 0]
        })
        .join('');
  }

  comprobarSala(id:string):boolean{
    return this.salas.some(elemento => elemento.idSala == id);
  }

  registrarSala(sala:{idSala:string, baraja:string, usuarios?:string[]}){
    this.salas.push(sala);
  }

  consultarSala(idSala:string){
    return this.salas.find(sala => sala.idSala == idSala);
  }

  registrarUsuarioEnSala(idSala:string, nombreUsuario:string){
    const sala = this.consultarSala(idSala);
    if(sala){
      sala.usuarios.push(nombreUsuario);
    }
  }
}
