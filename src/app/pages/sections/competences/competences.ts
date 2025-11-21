import { Component } from '@angular/core';

@Component({
  selector: 'section-competences',
  standalone: true,
  templateUrl: './competences.html',
  styleUrl: './competences.css'
})
export class CompetencesSection {

  groups = [
    { title: 'Full Stack', items: ['Angular','React','Node.js','Python'] },
    { title: 'Data / IA', items: ['TensorFlow','Scikit-learn','Pandas','NumPy'] },
    { title: 'Cloud & DevOps', items: ['AWS','Docker','Git','CI/CD'] }
  ];

}

