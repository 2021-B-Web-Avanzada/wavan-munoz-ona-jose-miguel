import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(
    private socket:Socket
  ) { }

  unionAJuego(nombreUsuario:string, idJuego:string){
    this.socket.emit(
      'unirseJuego',
      {
        nombre:nombreUsuario,
        idJuego:idJuego
      }
    )
  }

  escucharUnionAJuego(){
    return this.socket.fromEvent('escucharEvUnirseJuego')
  }

  seleccionarCarta(nombreUsuario:string, idSala:string, carta:string|number){
    this.socket.emit(
      'cartaSeleccionada',
      {
        nombre:nombreUsuario,
        idJuego:idSala,
        carta:carta
      }
    )
  }

  escucharCartaSeleccionada(){
    return this.socket.fromEvent('escucharEvCartaSeleccionada')
  }

  deseleccionarCarta(nombreUsuario:string, idSala:string, carta:string|number){
    this.socket.emit(
      'cartaDeseleccionada',
      {
        nombre:nombreUsuario,
        idJuego:idSala,
        carta:carta
      }
    )
  }

  escucharCartaDeseleccionada(){
    return this.socket.fromEvent('escucharEvCartaDeseleccionada')
  }

  mostrarCartas(idSala:string){
    this.socket.emit(
      'mostrarCartas',
      {
        idJuego: idSala
      }
    );
  }

  escucharMostrarCartas(){
    return this.socket.fromEvent('escucharEvMostrarCartas');
  }

  reiniciarVotacion(idSala:string){
    this.socket.emit(
      'reiniciarVotacion',
      {
        idJuego: idSala
      }
    )
  }

  escucharReinicioVotacion(){
    return this.socket.fromEvent('escucharEvReiniciarVotacion');
  }
}
