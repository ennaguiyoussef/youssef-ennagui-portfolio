import { Component } from '@angular/core';

@Component({
  selector: 'section-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class StatsSection {
  stats = [
    { value: '--', label: 'Projets réalisés' },
    { value: '--', label: 'Technologies' },
    { value: '--', label: "Ans d'expérience" },
    { value: '100%', label: 'Motivation' },
  ];
}
