import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-mention-notification',
  templateUrl: './ruta-mention-notification.component.html',
  styleUrls: ['./ruta-mention-notification.component.scss']
})
export class RutaMentionNotificationComponent implements OnInit {

  constructor() { }

  tweets = [
    {
      profilePic: "https://pbs.twimg.com/profile_images/1482225736874352642/Xp0vSrVk_400x400.jpg",
      userName: "JJ",
      userAt: "@Jmisterjay1",
      time:"22h",
      description:"Who did you have take this photo while you were burning it down in the background?",
      repliesTo: "@austinjscho"
    },
    {
      profilePic: "https://pbs.twimg.com/profile_images/1421820290905083908/egOU7IeX_400x400.jpg",
      userName: "Rick | rickapeterson.eth",
      userAt: "@rickapeterson",
      time:"22h",
      description:"Can you tell me exactly where is it?",
      repliesTo: "@austinjscho"
    },
    {
      profilePic: "https://pbs.twimg.com/profile_images/1391454476620419072/-pN_9mrL_400x400.jpg",
      userName: "GrilloF.Photography",
      userAt: "@fabrypill",
      time:"20h",
      description:"Nice frame man. Those steam stacks are blowing fat clouds",
      repliesTo: "@austinjscho"
    },
  ];
  ngOnInit(): void {
  }

}
