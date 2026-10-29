import type { MenuItem } from './menu-item.model';

export interface MenuCategory {
  id: string;
  titel: string;
  emoji: string;
  items: MenuItem[];
}
