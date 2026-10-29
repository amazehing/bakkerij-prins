
import { Component, inject } from '@angular/core';
import { OpeningHoursService } from '../../services/opening-hours.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly openingHours = inject(OpeningHoursService);

  get tijden() {
    return this.openingHours.tijden;
  }

  get vandaag(): number {
    return this.openingHours.vandaag;
  }
}
