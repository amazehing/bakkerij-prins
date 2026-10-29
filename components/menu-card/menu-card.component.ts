
import { Component, Input } from '@angular/core';
import type { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss',
})
export class MenuCardComponent {
  @Input({ required: true }) item!: MenuItem;
  @Input({ required: true }) emoji!: string;

  get prijs(): string {
    return this.item.prijs.toFixed(2).replace('.', ',');
  }
}
