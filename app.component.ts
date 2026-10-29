
import {
  Component,
  HostListener,
  computed,
  signal,
} from '@angular/core';

import { MENU } from './menu.data';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopbarComponent,
    NavbarComponent,
    SidebarComponent,
    HeroComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly menu = MENU;

  readonly actief = signal('alles');
  readonly menuOpen = signal(false);

  readonly zichtbareCategorieen = computed(() => {
    const actieveId = this.actief();

    if (actieveId === 'alles') {
      return this.menu;
    }

    return this.menu.filter(
      (categorie) => categorie.id === actieveId,
    );
  });

  readonly menutitel = computed(() => {
    return this.actief() === 'alles'
      ? 'Ons volledige menu'
      : '';
  });

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  openMenu(): void {
    this.menuOpen.set(true);
  }

  sluitMenu(): void {
    this.menuOpen.set(false);
  }

  kiesCategorie(id: string): void {
    this.actief.set(id);
    this.sluitMenu();
    this.scrollNaar('menu');
  }

  naarContact(): void {
    this.sluitMenu();
    this.scrollNaar('contact');
  }

  private scrollNaar(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.sluitMenu();
  }
}
