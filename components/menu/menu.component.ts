
import { Component, Input } from '@angular/core';

import type { MenuCategory } from '../../models/menu-category.model';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() categorieen: MenuCategory[] = [];
  @Input() titel = 'Ons volledige menu';
  @Input() toonTitel = true;
}
