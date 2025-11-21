import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  constructor(public theme: ThemeService) {}

  ngOnInit() {
    // Charger le thème depuis localStorage au démarrage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.theme.setDark();
    } else {
      this.theme.setLight();
    }
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  get themeIconClass() {
    return this.theme.isDark() ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }

  get themeAriaLabel() {
    return this.theme.isDark() ? 'Passer en mode clair' : 'Passer en mode sombre';
  }
}
