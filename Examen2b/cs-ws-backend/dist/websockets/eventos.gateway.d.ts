import { Socket } from 'socket.io';
export declare class EventosGateway {
    unirseJuego(mensaje: {
        nombre: string;
        idJuego: string;
    }, socket: Socket): string;
    cartaSeleccionada(mensaje: {
        nombre: string;
        idJuego: string;
        carta: string;
    }, socket: Socket): string;
    cartaDeseleccionada(mensaje: {
        nombre: string;
        idJuego: string;
        carta: string;
    }, socket: Socket): string;
    mostrarCartas(mensaje: {
        idJuego: string;
    }, socket: Socket): string;
    reiniciarVotacion(mensaje: {
        idJuego: string;
    }, socket: Socket): string;
}
