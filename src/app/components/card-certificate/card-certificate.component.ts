import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-certificate.component.html',
  styleUrls: [
    './card-certificate.component.css',
    './card-certificate.responsive.component.css',
  ],
})
export class CardCertificateComponent implements OnInit {
  showPan: boolean = false;
  showIfood: boolean = false;

  bancoPanTxt: string = 'Ler Mais';
  iFoodTxt: string = 'Ler Mais';
  constructor() {}

  ngOnInit(): void {}

  show_more(how: string) {
    switch (how) {
      case 'pan':
        this.showPan = !this.showPan;
        this.bancoPanTxt = this.showPan ? 'Ler Mais' : 'Ler Menos';
        break;
      case 'iFood':
        this.showIfood = !this.showIfood;
        this.iFoodTxt = this.showIfood ? 'Ler Mais' : 'Ler Menos';
        break;
    }
  }
}
