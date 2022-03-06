import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Socket} from 'socket.io';

@WebSocketGateway(8080,{
    cors: {
        origin: '*'
    }
})
export class EventosGateway{

    @SubscribeMessage('unirseJuego')
    unirseJuego(
       @MessageBody()
       mensaje:{nombre:string, idJuego:string},
       @ConnectedSocket()
       socket:Socket
    ){
        socket.join(mensaje.idJuego);
        const infoATransmitir = {nombreUsuario: mensaje.nombre}
        socket.broadcast
            .to(mensaje.idJuego)
            .emit(
                'escucharEvUnirseJuego',
                infoATransmitir
            );
        return 'ok';
    }

    @SubscribeMessage('cartaSeleccionada')
    cartaSeleccionada(
        @MessageBody()
        mensaje: {nombre:string, idJuego:string, carta:string|number},
        @ConnectedSocket()
        socket:Socket
    ){
        const infoCarta = {nombreUsuario: mensaje.nombre, carta:mensaje.carta}
        socket.broadcast
            .to(mensaje.idJuego)
            .emit(
                'escucharEvCartaSeleccionada',
                infoCarta
            )
        return 'ok';
    }

    @SubscribeMessage('cartaDeseleccionada')
    cartaDeseleccionada(
        @MessageBody()
            mensaje: {nombre:string, idJuego:string, carta:string|number},
        @ConnectedSocket()
            socket:Socket
    ){
        const infoCarta = {nombreUsuario: mensaje.nombre, carta:mensaje.carta}
        socket.broadcast
            .to(mensaje.idJuego)
            .emit(
                'escucharEvCartaDeseleccionada',
                infoCarta
            )
        return 'ok';
    }

    @SubscribeMessage('mostrarCartas')
    mostrarCartas(
        @MessageBody()
        mensaje:{idJuego:string},
        @ConnectedSocket()
        socket:Socket
    ){
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvMostrarCartas')
        return 'ok';
    }

    @SubscribeMessage('reiniciarVotacion')
    reiniciarVotacion(
        @MessageBody()
        mensaje:{idJuego:string},
        @ConnectedSocket()
        socket:Socket
    ){
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvReiniciarVotacion');
        return 'ok';
    }
}