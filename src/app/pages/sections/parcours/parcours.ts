import { Component } from '@angular/core';

@Component({
  selector: 'section-parcours',
  standalone: true,
  templateUrl: './parcours.html',
  styleUrl: './parcours.css'
})
export class ParcoursSection {
  items = [
    { date: '2021 - 2025', titre: 'Licence SMI', desc: 'Fondamentaux mathématiques & informatique.' },
    { date: '2025 - 2027', titre: 'Master Web Intelligence & Data Science', desc: 'IA, data, architectures web.' }
  ];
}

