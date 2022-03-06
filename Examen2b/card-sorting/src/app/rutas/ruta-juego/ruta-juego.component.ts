import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Sala} from "../../servicios/http/interfaces/Sala";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {environment} from "../../../environments/environment";
import {WebsocketsService} from "../../servicios/websocket/websockets.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-juego',
  templateUrl: './ruta-juego.component.html',
  styleUrls: ['./ruta-juego.component.scss']
})
export class RutaJuegoComponent implements OnInit {
  listaUsuarios:{nombreUsuario:string, cartaSeleccionada:boolean, valorCarta?:string|number}[] = [];
  nombreUsuario:string = '';
  cartasReveladas:boolean = false;
  infoSala?:Sala = undefined;
  baraja:(string|number)[] = [];
  listaSuscripciones:Subscription[] =[];
  constructor(
    private rutaActual:ActivatedRoute,
    private readonly apiService:ConexionBackendService,
    private ws:WebsocketsService
  ) { }

  ngOnInit(): void {
    this.rutaActual.params
      .subscribe({
        next: (parametrosRuta) =>{
          const codigoSala = parametrosRuta['idJuego'];
          this.nombreUsuario = parametrosRuta['nombreUsuario'];
          this.obtenerInformacionSala(codigoSala)
          this.anadirUsuario(this.nombreUsuario);
        }
      })
  }

  anadirUsuario(nombreUsuario:string){
    const yaRegistrado = this.listaUsuarios.some(usuario => usuario.nombreUsuario == nombreUsuario);
    if(!yaRegistrado){
      this.listaUsuarios.push({nombreUsuario:nombreUsuario,cartaSeleccionada: false});
    }
  }

  cartaSeleccionada(valorCarta:string|number){
    const usuarioActual = this.listaUsuarios.find((usuario) => {
      return usuario.nombreUsuario == this.nombreUsuario
    })
    if(usuarioActual){
      if(usuarioActual.cartaSeleccionada){
        if(usuarioActual.valorCarta == valorCarta){
          usuarioActual.cartaSeleccionada = false;
          usuarioActual.valorCarta = undefined;
          this.ws.deseleccionarCarta(
            usuarioActual.nombreUsuario,
            this.infoSala!!.idSala,
            valorCarta
          );
        }else
        {
          usuarioActual.valorCarta = valorCarta;
          this.ws.seleccionarCarta(
            usuarioActual.nombreUsuario,
            this.infoSala!!.idSala,
            valorCarta
          );
        }
      }else{
        usuarioActual.valorCarta = valorCarta;
        usuarioActual.cartaSeleccionada = true;
        this.ws.seleccionarCarta(
          usuarioActual.nombreUsuario,
          this.infoSala!!.idSala,
          valorCarta
        );
      }
    }
  }

  revelarCartas(lanzadoAqui:boolean = true){
    if(lanzadoAqui){
      this.ws.mostrarCartas(this.infoSala!!.idSala);
    }
    this.cartasReveladas = true;
  }

  nuevaVotacion(lanzadoAqui = true){
    if(lanzadoAqui){
      this.ws.reiniciarVotacion(this.infoSala!!.idSala);
    }
    this.listaUsuarios.forEach(
      (infoUsuario) => {
        infoUsuario.cartaSeleccionada = false
        infoUsuario.valorCarta = undefined
      }
    )
    this.cartasReveladas = false;
  }

  obtenerInformacionSala(idSala:string){
    this.apiService.consultarSala(idSala)
      .subscribe({
        next: (infoSala) =>{
          if(infoSala.sala){
           this.infoSala = infoSala.sala;
           this.baraja = environment.opcionesCartas[this.infoSala.baraja];
            infoSala.sala.usuarios?.forEach(
              (usuario) =>{
                if(usuario != this.nombreUsuario){
                  this.anadirUsuario(usuario);
                }
              });
            const yaRegistrado = infoSala.sala.usuarios?.some(usuario => usuario == this.nombreUsuario);
            if(!yaRegistrado){
              this.registrarUsuario();
            }
            this.unirseSala()
          }
        }
      });
  }

  unirseSala(){
    this.desuscipcion();
    this.ws.unionAJuego(this.nombreUsuario,this.infoSala!!.idSala)
    const unionAJuego = this.ws.escucharUnionAJuego()
      .subscribe({
        next: (datos) =>{
          const usuario = datos as {nombreUsuario:string}
          this.anadirUsuario(usuario['nombreUsuario'])
        },
        error: (err) =>{
          console.error(err)
        }
      });
    this.listaSuscripciones.push(unionAJuego);
    const cartaSeleccionada = this.ws.escucharCartaSeleccionada()
      .subscribe({
        next: (datos) => {
          const infoCarta = datos as {nombreUsuario:string, carta:string|number};
          const usuarioCambiado = this.listaUsuarios.find(
            (usuario) =>{
              return usuario.nombreUsuario == infoCarta.nombreUsuario;
            }
          );
          if(usuarioCambiado){
            usuarioCambiado.cartaSeleccionada = true;
            usuarioCambiado.valorCarta = infoCarta.carta;
          }
        }
      });
    this.listaSuscripciones.push(cartaSeleccionada);
    const cartaDeseleccionada = this.ws.escucharCartaDeseleccionada()
      .subscribe({
        next: (datos) =>{
          const infoCarta = datos as {nombreUsuario:string, carta:string|number};
          const usuarioCambiado = this.listaUsuarios.find(
            (usuario) =>{
              return usuario.nombreUsuario == infoCarta.nombreUsuario;
            }
          );
          if(usuarioCambiado){
            usuarioCambiado.cartaSeleccionada = false;
            usuarioCambiado.valorCarta = undefined;
          }
        }
      });
    this.listaSuscripciones.push(cartaDeseleccionada);
    const reinicioJuego = this.ws.escucharReinicioVotacion()
      .subscribe({
        next: (data)=>{
          this.nuevaVotacion(false);
        }
      });
    this.listaSuscripciones.push(reinicioJuego);
    const mostrarCartas = this.ws.escucharMostrarCartas()
      .subscribe({
        next: (datos) =>{
          this.revelarCartas(false);
        }
      });
    this.listaSuscripciones.push(mostrarCartas);
  }

  registrarUsuario(){
    this.apiService.registrarUsuarioEnSala(this.infoSala!!.idSala,this.nombreUsuario)
      .subscribe();
  }

  desuscipcion(){
    this.listaSuscripciones.forEach(
      (subs)=>{
        subs.unsubscribe()
      }
    );
    this.listaSuscripciones = [];
  }
}
