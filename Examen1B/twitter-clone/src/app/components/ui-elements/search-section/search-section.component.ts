import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {

  constructor() { }

  followSugestions = [
    {
      url: "https://pbs.twimg.com/profile_images/1448287947686617089/N7uf8mjs_400x400.jpg",
      name: "Adele",
      at: "@Adele"
    },
    {
      url:"https://pbs.twimg.com/profile_images/1467553896134586371/ztZNY5Gz_400x400.jpg",
      name: "Nathy Peluso",
      at: "@NathyPeluso"
    }
  ];

  trending = [
    {
      country: "Ecuador",
      topic: undefined,
      title: "#Deltacron",
      nt: "3,282"
    },
    {
      country: undefined,
      topic: "Gaming",
      title: "Security Breach",
      nt: "47.8K"
    },
  ];

  ngOnInit(): void {
  }

}
