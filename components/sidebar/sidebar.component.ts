
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import type { MenuCategory } from '../../models/menu-category.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() menu: MenuCategory[] = [];
  @Input() activeId = 'alles';
  @Input() open = false;

  @Output() categorySelect = new EventEmitter<string>();
  @Output() contactSelect = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
