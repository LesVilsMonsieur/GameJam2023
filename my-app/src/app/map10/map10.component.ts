import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map10',
  templateUrl: './map10.component.html',
  styleUrls: ['./map10.component.css']
})
export class Map10Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio10 = new Audio();

  ngOnInit(): void {
    this.audio10.src = "../assets/Music-Exploration2.wav";
    this.audio10.load();
    this.audio10.play();
  }

  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
    this.audio10.pause();
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
    this.audio10.pause();
  }

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio10.pause();
  }

}
