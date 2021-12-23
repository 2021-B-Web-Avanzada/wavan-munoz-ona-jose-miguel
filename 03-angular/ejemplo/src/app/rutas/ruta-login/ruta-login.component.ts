import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner = true
  arregloUsuarios = [
    {
      id:1,
      nombre: 'Miguel',
      color: '#00BCFF',
      linkImg: 'https://pbs.twimg.com/media/FHQwdiPX0AA4XXD?format=jpg&name=large',
      link: 'https://twitter.com/'
    },
    {
      id:2,
      nombre: 'Jose',
      color: '#007AFF',
      linkImg: 'https://pbs.twimg.com/media/FHS3nYFVEAE-zX6?format=jpg&name=large',
      link: 'https://la.mathworks.com/'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner
  }
}
