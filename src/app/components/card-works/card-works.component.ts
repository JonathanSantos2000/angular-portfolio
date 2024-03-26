import { Component, OnInit } from '@angular/core';
import { TechComponent } from './tech/tech.component';

@Component({
  selector: 'app-card-works',
  standalone: true,
  templateUrl: './card-works.component.html',
  styleUrls: [
    './card-works.component.css',
    './card-works.responsive.component.css',
  ],
  imports: [TechComponent],
})
export class CardWorksComponent implements OnInit {
  showMoreConteiner: boolean = false;
  showMoreLeitura: boolean = false;
  showMoreScore: boolean = false;
  showMoreMaridao: boolean = false;
  btnShow: string = 'Mostrar Mais';
  leituraTxt: string = 'Ler Mais';
  scoreTxt: string = 'Ler Mais';
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

  show_more_txt(how: string) {
    switch (how) {
      case 'maridao':
        this.showMoreMaridao = !this.showMoreMaridao;
        this.maridaoTxt = this.showMoreMaridao ? 'Ler Menos' : 'Ler Mais';
        break;
      case 'score':
        this.showMoreScore = !this.showMoreScore;
        this.scoreTxt = this.showMoreScore ? 'Ler Menos' : 'Ler Mais';
        break;
      case 'leitura':
        this.showMoreLeitura = !this.showMoreLeitura;
        this.leituraTxt = this.showMoreLeitura ? 'Ler Menos' : 'Ler Mais';
        break;
    }
  }
}
