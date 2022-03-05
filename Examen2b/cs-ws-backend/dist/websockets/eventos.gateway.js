"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let EventosGateway = class EventosGateway {
    unirseJuego(mensaje, socket) {
        socket.join(mensaje.idJuego);
        const infoATransmitir = { nombreUsuario: mensaje.nombre };
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvUnirseJuego', infoATransmitir);
        return 'ok';
    }
    cartaSeleccionada(mensaje, socket) {
        const infoCarta = { nombreUsuario: mensaje.nombre, carta: mensaje.carta };
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvCartaSeleccionada', infoCarta);
        return 'ok';
    }
    cartaDeseleccionada(mensaje, socket) {
        const infoCarta = { nombreUsuario: mensaje.nombre, carta: mensaje.carta };
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvCartaDeseleccionada', infoCarta);
        return 'ok';
    }
    mostrarCartas(mensaje, socket) {
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvMostrarCartas');
        return 'ok';
    }
    reiniciarVotacion(mensaje, socket) {
        socket.broadcast
            .to(mensaje.idJuego)
            .emit('escucharEvReiniciarVotacion');
        return 'ok';
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('unirseJuego'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "unirseJuego", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('cartaSeleccionada'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "cartaSeleccionada", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('cartaDeseleccionada'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "cartaDeseleccionada", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mostrarCartas'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "mostrarCartas", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('reiniciarVotacion'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "reiniciarVotacion", null);
EventosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(8080, {
        cors: {
            origin: '*'
        }
    })
], EventosGateway);
exports.EventosGateway = EventosGateway;
//# sourceMappingURL=eventos.gateway.js.map