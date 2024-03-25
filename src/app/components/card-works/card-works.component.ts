import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare module 'tslib';
@Component({
  selector: 'app-card-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-works.component.html',
  styleUrls: [
    './card-works.component.css',
    './card-works.responsive.component.css',
  ],
})
export class CardWorksComponent implements OnInit {
  showMoreConteiner: boolean = false;
  showMoreMaridao: boolean = false;
  btnShow: string = 'Mostrar Mais';
  maridaoTxt: string = 'Ler Mais';

  constructor() {}

  ngOnInit(): void {}

  show_more() {
    if (this.showMoreConteiner == false) {
      this.showMoreConteiner = true;
      this.btnShow = 'Mostrar Menos';
    } else {
      this.showMoreConteiner = false;
      this.btnShow = 'Mostrar Mais';
    }
  }

  show_more_maridao() {
    if (this.showMoreMaridao == false) {
      this.showMoreMaridao = true;
      this.maridaoTxt = 'Ler Menos';
    } else {
      this.showMoreMaridao = false;
      this.maridaoTxt = 'Ler Mais';
    }
  }
}
