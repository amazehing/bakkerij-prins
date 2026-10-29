
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Output() menuClick = new EventEmitter<void>();
}
