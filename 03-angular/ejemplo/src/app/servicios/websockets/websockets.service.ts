import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WebsocketsService{
  constructor(private socket:Socket) {
  }
  ejecutarEventoHola(){
    const resp = this.socket.emit('hola', {
      nombre: 'Miguel'
    })
    console.log(resp)
  }
  escucharEventoHola(){
    return this.socket.fromEvent('escucharEventoHola');
  }
}
