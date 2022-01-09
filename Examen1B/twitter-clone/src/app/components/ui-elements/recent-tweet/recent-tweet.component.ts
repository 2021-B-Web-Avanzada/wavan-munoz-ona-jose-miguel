import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recent-tweet',
  templateUrl: './recent-tweet.component.html',
  styleUrls: ['./recent-tweet.component.scss']
})
export class RecentTweetComponent implements OnInit {

  constructor() { }

  @Input()
  username:string = "El Comercio";

  @Input()
  src:string = "https://pbs.twimg.com/profile_images/1347345926533349382/4UqSVrRu_400x400.jpg";

  @Input()
  desc:string = "A dos años de la advertencia del médico chino sobre covid-19 que fue censurada por su gobierno"
  ngOnInit(): void {
  }

}
