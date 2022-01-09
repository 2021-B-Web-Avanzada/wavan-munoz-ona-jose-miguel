import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tweets = [
    {
      profilePic: "https://pbs.twimg.com/profile_images/1477521922627829761/a7kFd2Ms_400x400.jpg",
      userName: "abdul",
      userAt: "@Advil",
      time:"5h",
      description:"the locals refer to the western sahara as the “great sand sea”. nothing but dunes and mountains for thousands of miles. standing on this dune and staring off into the distance in any direction was disorienting!",
      repliesTo: undefined
    },
    {
      profilePic: "https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_400x400.jpg",
      userName: "CNN",
      userAt: "@CNN",
      time:"5h",
      description:"With Covid-19 tests hard to find in many parts of the country and the Omicron variant spreading rapidly, health experts are advising those with symptoms to isolate themselves if they even only suspect they have the virus",
      repliesTo: undefined
    },
    {
      profilePic: "https://pbs.twimg.com/profile_images/1471119843915190279/OS1BTxEd_400x400.jpg",
      userName: ".",
      userAt: "@tylermooma",
      time:"4m",
      description:"Everything that comes, also goes",
      repliesTo: undefined
    },
    {
      profilePic: "https://pbs.twimg.com/profile_images/1477393516661772293/ITpaLy0Z_400x400.jpg",
      userName: "Stream Spotify España",
      userAt: "@StreamMusicESP",
      time:"Jan 5",
      description:"14 - La subida más fuerte hasta el momento del año en el Top 50 de \n" +
        "@SpotifySpain\n" +
        " es para\n" +
        "36 (+14) VIVIR ASÍ ES MORIR DE AMOR - \n" +
        "@NathyPeluso",
      repliesTo: undefined
    }
  ]
}
