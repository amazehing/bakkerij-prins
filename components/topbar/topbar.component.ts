
import { Component, inject } from '@angular/core';
import { OpeningHoursService } from '../../services/opening-hours.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  private readonly openingHours = inject(OpeningHoursService);

  get geopend(): boolean {
    return this.openingHours.geopend;
  }

  get statusTekst(): string {
    return this.openingHours.statusTekst;
  }
}
