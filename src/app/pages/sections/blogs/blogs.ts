import { Component } from '@angular/core';

@Component({
  selector: 'section-blogs',
  standalone: true,
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class BlogsSection {
  posts = [
    { date: 'En cours ...', titre: '--------------------', desc: '----------------------------------------' },
    { date: 'En cours ...', titre: '--------------------', desc: '----------------------------------------' },
    { date: 'En cours ...', titre: '--------------------', desc: '----------------------------------------' }
  ];
}

