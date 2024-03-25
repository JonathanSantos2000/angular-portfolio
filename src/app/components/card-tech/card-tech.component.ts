import { Component, OnInit } from '@angular/core';
import { ToolsComponent } from '../tools/tools.component';

@Component({
  selector: 'app-card-tech',
  standalone: true,
  templateUrl: './card-tech.component.html',
  styleUrls: [
    './card-tech.component.css',
    './card-tech.responsive.component.css',
  ],
  imports: [ToolsComponent],
})
export class CardTechComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
