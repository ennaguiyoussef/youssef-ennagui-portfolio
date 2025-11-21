import { Component } from '@angular/core';

@Component({
  selector: 'section-projets',
  standalone: true,
  templateUrl: './projets.html',
  styleUrl: './projets.css'
})
export class ProjetsSection {
  projets = [
    { icon: 'bi bi-code-slash', titre: 'App Web Full Stack', desc: 'Angular + Node.js + Auth', tags: ['Angular','Node','Auth'] },
    { icon: 'bi bi-graph-up', titre: 'Analyse & ML', desc: 'Pipeline data & modèles ML', tags: ['Python','Pandas','ML'] },
    { icon: 'bi bi-cloud', titre: 'Infra Cloud', desc: 'Docker, AWS, CI/CD', tags: ['Docker','AWS','CI/CD'] }
  ];
}

