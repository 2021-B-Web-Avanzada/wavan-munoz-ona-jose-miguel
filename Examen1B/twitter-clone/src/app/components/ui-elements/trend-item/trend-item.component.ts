import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.scss']
})
export class TrendItemComponent implements OnInit {

  constructor() { }

  @Input()
  country?:string = undefined;

  @Input()
  topic?:string = undefined;

  @Input()
  title:string = "Security Breach"

  @Input()
  numTw:string = "1,943"

  ngOnInit(): void {
  }

}
