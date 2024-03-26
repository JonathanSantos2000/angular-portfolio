import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  urlImg: string = '';
  @Input()
  title: string = '';
  @Input()
  Texto: string = '';

  show: boolean = false;
  read: string = 'Ler Mais';

  ngOnInit(): void {}

  show_more() {
    this.show = !this.show;
    this.read = this.show ? 'Ler Menos' : 'Ler Mais';
  }
}
