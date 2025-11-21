import { Component } from '@angular/core';

@Component({
  selector: 'section-competences',
  standalone: true,
  templateUrl: './competences.html',
  styleUrl: './competences.css'
})
export class CompetencesSection {

  groups = [
    { title: 'Full Stack framwork', items: ['Angular','React','Laravel','Spring boot'] },
    { title: '----------', items: [] },
    { title: '-----------', items: [] }
  ];

}

