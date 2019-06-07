import { Component, OnInit } from "@angular/core";
//import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home-carousal",
  templateUrl: "./home-carousal.component.html",
  styleUrls: ["./home-carousal.component.css"]
})
export class HomeCarousalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'ngbd-carousel-config',
//   templateUrl: './carousel-config.html',
//   providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
// })
// export class NgbdCarouselConfig {
//   images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

//   constructor(config: NgbCarouselConfig) {
//     // customize default values of carousels used by this component tree
//     config.interval = 10000;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//   }
// }
