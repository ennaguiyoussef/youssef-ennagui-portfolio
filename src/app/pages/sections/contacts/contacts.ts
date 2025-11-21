import { Component } from '@angular/core';

@Component({
  selector: 'section-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class ContactsSection {
  contacts = [
    { icon: 'bi bi-envelope-fill', label: 'Email', value: 'youssef.ennagui@usmba.ac.ma', link: 'mailto:youssef.ennagui@gmail.com' },
    { icon: 'bi bi-linkedin', label: 'LinkedIn', value: 'Youssef Ennagui', link: 'https://linkedin.com/in/youssef-ennagui' },
    { icon: 'bi bi-github', label: 'GitHub', value: 'youssef-ennagui', link: 'https://github.com/youssef-ennagui' }
  ];
}

