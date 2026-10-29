
import { Injectable } from '@angular/core';

export interface OpeningTime {
  dag: string;
  tijd: string;
}

@Injectable({
  providedIn: 'root',
})
export class OpeningHoursService {
  readonly tijden: OpeningTime[] = [
    { dag: 'Maandag', tijd: '08:00 – 18:30' },
    { dag: 'Dinsdag', tijd: '08:00 – 18:30' },
    { dag: 'Woensdag', tijd: '08:00 – 18:30' },
    { dag: 'Donderdag', tijd: '08:00 – 18:30' },
    { dag: 'Vrijdag', tijd: '08:00 – 18:30' },
    { dag: 'Zaterdag', tijd: '08:00 – 18:30' },
    { dag: 'Zondag', tijd: 'Gesloten' },
  ];

  get vandaag(): number {
    // JavaScript: zondag = 0.
    // Onze lijst: maandag = 0.
    return (new Date().getDay() + 6) % 7;
  }

  get geopend(): boolean {
    const nu = new Date();
    const minuten = nu.getHours() * 60 + nu.getMinutes();
    const openingsdag = nu.getDay() !== 0;

    return (
      openingsdag &&
      minuten >= 8 * 60 &&
      minuten < 18 * 60 + 30
    );
  }

  get statusTekst(): string {
    return this.geopend
      ? 'Nu geopend • tot 18:30'
      : 'Nu gesloten';
  }
}
