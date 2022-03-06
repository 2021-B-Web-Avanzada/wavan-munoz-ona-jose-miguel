import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Sala} from "../../servicios/http/interfaces/Sala";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {environment} from "../../../environments/environment";

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
  constructor(
    private rutaActual:ActivatedRoute,
    private readonly apiService:ConexionBackendService
  ) { }

  ngOnInit(): void {
    this.rutaActual.params
      .subscribe({
        next: (parametrosRuta) =>{
          const codigoSala = parametrosRuta['idJuego'];
          this.obtenerInformacionSala(codigoSala)
          this.nombreUsuario = parametrosRuta['nombreUsuario'];
          this.anadirUsuario(this.nombreUsuario);
        }
      })
  }

  anadirUsuario(nombreUsuario:string){
    this.listaUsuarios.push({nombreUsuario:nombreUsuario,cartaSeleccionada: false});
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
        }else
        {
          usuarioActual.valorCarta = valorCarta;
        }
      }else{
        usuarioActual.valorCarta = valorCarta;
        usuarioActual.cartaSeleccionada = true;
      }
    }
  }

  revelarCartas(){
    this.cartasReveladas = true;
  }

  nuevaVotacion(){
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
           this.baraja = environment.opcionesCartas[this.infoSala.baraja]
          }
        }
      });
  }
}
