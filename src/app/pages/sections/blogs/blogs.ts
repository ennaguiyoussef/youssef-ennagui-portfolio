import { Component } from '@angular/core';

@Component({
  selector: 'section-blogs',
  standalone: true,
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class BlogsSection {
  posts = [
    { date: '20 Nov 2025', titre: 'Angular 20 – Nouveautés', desc: 'Survol des nouvelles APIs et optimisations.' },
    { date: '15 Nov 2025', titre: 'ML pour débutants', desc: 'Les bases illustrées par un mini projet.' },
    { date: '10 Nov 2025', titre: 'DevOps Best Practices', desc: 'CI/CD, conteneurs et observabilité.' }
  ];
}

