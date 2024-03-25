import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css',
})
export class ToolsComponent implements OnInit {
  @Input()
  title: string = '';
  @Input()
  tools: string[] = [];
  @Input()
  icon: string = '';
  
  ngOnInit(): void {}
}
