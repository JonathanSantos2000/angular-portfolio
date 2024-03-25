import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css',
})
export class TechComponent implements OnInit {
  @Input()
  tools: string[] = [];
  @Input()

  ngOnInit(): void {}
}
