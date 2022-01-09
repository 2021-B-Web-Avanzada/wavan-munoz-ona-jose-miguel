import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-info-btn',
  templateUrl: './profile-info-btn.component.html',
  styleUrls: ['./profile-info-btn.component.scss']
})
export class ProfileInfoBtnComponent implements OnInit {

  constructor() { }

  @Input()
  userName = "Austinvisual";

  @Input()
  accountId = "@austinjscho";

  @Input()
  picture = "assets/img/duck.jpg";

  ngOnInit(): void {
  }

}
