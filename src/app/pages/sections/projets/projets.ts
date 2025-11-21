import { Component } from '@angular/core';

@Component({
  selector: 'section-projets',
  standalone: true,
  templateUrl: './projets.html',
  styleUrl: './projets.css'
})
export class ProjetsSection {
  projets = [
    { icon: 'bi bi-code-slash', titre: 'App Web Full Stack', desc: 'React + Laravel + Database Mysql', tags: ['React','Laravel','Mysql'] },
    { icon: '', titre: '------------', desc: '------------------', tags: [] },
    { icon: '', titre: '------------', desc: '-------------------', tags: [] }
  ];
}

