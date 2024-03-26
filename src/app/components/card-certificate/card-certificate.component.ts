import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-card-certificate',
  standalone: true,
  templateUrl: './card-certificate.component.html',
  styleUrls: [
    './card-certificate.component.css',
    './card-certificate.responsive.component.css',
  ],
  imports: [CardComponent],
})
export class CardCertificateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
