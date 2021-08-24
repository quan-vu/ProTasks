import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.scss']
})
export class TopDestinationComponent implements OnInit {

  topDestination: Array<any>;
  title: string = "Top Destinations in Vietnam";

  constructor() { 
    this.topDestination = [
      {
        title: "Ho Chi Minh City",
        description: "9,915 accommodations",
        image: "assets/images/ho-chi-minh-thumb.jpg"
      },
      {
        title: "Ha Noi",
        description: "6,500 accommodations",
        image: "assets/images/ha-noi-thumb.jpg"
      },
      {
        title: "Vung Tau",
        description: "3,150 accommodations",
        image: "assets/images/vung-tau-thumb.jpg"
      },
      {
        title: "Nha Trang",
        description: "2,915 accommodations",
        image: "assets/images/nha-trang-thumb.jpg"
      },
      {
        title: "Da Nang",
        description: "4,015 accommodations",
        image: "assets/images/da-nang-thumb.jpg"
      },
      {
        title: "Dalat",
        description: "3,315 accommodations",
        image: "assets/images/dalat-thumb.jpg"
      },
    ];
  }

  ngOnInit(): void {
  }

}
