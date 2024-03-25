import { Component, OnInit } from '@angular/core';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrls: [
    './menu-bar.component.css',
    './menu-bar.responsive.component.css',
  ],
})
export class MenuBarComponent implements OnInit {
  menuVariable: boolean = false;
  overlayVariable: boolean = false;
  btnclose: boolean = false;
  btnOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.overlayVariable = !this.overlayVariable;
  }
}
