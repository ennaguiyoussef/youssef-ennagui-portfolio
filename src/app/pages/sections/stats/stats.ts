import { Component } from '@angular/core';

@Component({
  selector: 'section-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class StatsSection {
  stats = [
    { value: '10+', label: 'Projets réalisés' },
    { value: '5+', label: 'Technologies' },
    { value: '2+', label: "Ans d'expérience" },
    { value: '100%', label: 'Motivation' },
  ];
}
