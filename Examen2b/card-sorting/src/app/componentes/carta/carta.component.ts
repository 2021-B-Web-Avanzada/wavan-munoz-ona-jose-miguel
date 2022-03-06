import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {
  @Input()
  alturaPer:number = 0;

  @Input()
  anchoPer:number = 0;

  @Input()
  valor:string|number = '';

  @Input()
  revelada:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
