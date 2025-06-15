import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'version0.1';
  arztpraxen = [
    {
      name: 'Praxis Dr. Müller',
      strasse: 'Bahnhofstraße 10, 12345 Berlin',
      email: 'mueller@praxis.de',
      telefon: '030 123456',
      bewertung: 4.5,
    },
    {
      name: 'Zahnarztpraxis Dr. Meier',
      strasse: 'Lindenweg 3, 23456 Hamburg',
      email: 'meier@zahnpraxis.de',
      telefon: '040 987654',
      bewertung: 4.0,
    },
    {
      name: 'Hausarztpraxis am Markt',
      strasse: 'Marktplatz 7, 34567 Köln',
      email: 'info@hausarztmarkt.de',
      telefon: '0221 456789',
      bewertung: 4.8,
    },
    {
      name: 'Orthopädiezentrum Nord',
      strasse: 'Nordstraße 5, 45678 München',
      email: 'kontakt@orthonord.de',
      telefon: '089 321456',
      bewertung: 3.9,
    },
    {
      name: 'Kinderarztpraxis Dr. Klein',
      strasse: 'Blumenweg 12, 56789 Leipzig',
      email: 'dr.klein@kinderpraxis.de',
      telefon: '0341 789123',
      bewertung: 4.7,
    },
    {
      name: 'Dermatologie am Ring',
      strasse: 'Ringstraße 9, 67890 Frankfurt',
      email: 'haut@ringpraxis.de',
      telefon: '069 456321',
      bewertung: 4.1,
    },
    {
      name: 'Praxis Dr. Sommer',
      strasse: 'Sommerweg 8, 78901 Stuttgart',
      email: 'praxis@drsommer.de',
      telefon: '0711 654789',
      bewertung: 3.5,
    },
    {
      name: 'Frauenarztpraxis Mitte',
      strasse: 'Zentrumstraße 14, 89012 Düsseldorf',
      email: 'mitte@frauenarzt.de',
      telefon: '0211 987321',
      bewertung: 4.6,
    },
    {
      name: 'Internistische Praxis Süd',
      strasse: 'Südallee 4, 90123 Bremen',
      email: 'sued@internisten.de',
      telefon: '0421 654987',
      bewertung: 4.3,
    },
    {
      name: 'Augenärzte Westend',
      strasse: 'Weststraße 11, 01234 Hannover',
      email: 'info@augenwest.de',
      telefon: '0511 321987',
      bewertung: 4.2,
    },
  ];
}
