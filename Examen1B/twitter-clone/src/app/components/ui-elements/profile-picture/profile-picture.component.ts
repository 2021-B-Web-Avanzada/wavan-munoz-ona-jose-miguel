import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  constructor() { }
  @Input()
  imgPath = "assets/img/duck.jpg";

  @Input()
  sqDimensions = 40;

  ngOnInit(): void {
  }

}
