import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-follow-suggestion',
  templateUrl: './follow-suggestion.component.html',
  styleUrls: ['./follow-suggestion.component.scss']
})
export class FollowSuggestionComponent implements OnInit {

  constructor() { }

  @Input()
  imgUrl:string = "https://pbs.twimg.com/profile_images/1479545431449341952/UBFRy-J8_400x400.jpg";

  @Input()
  username:string = "Khumais";

  @Input()
  userat:string = "@khumaix"

  ngOnInit(): void {
  }

}
