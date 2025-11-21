import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';
  theme = signal<'light' | 'dark'>(this.loadInitial());

  private loadInitial(): 'light' | 'dark' {
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'dark' || saved === 'light') return saved as 'light' | 'dark';
    // fallback à préférence système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  constructor() {
    this.applyTheme(this.theme());
  }

  private applyTheme(value: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', value);
  }

  setTheme(value: 'light' | 'dark') {
    this.theme.set(value);
    localStorage.setItem(this.storageKey, value);
    this.applyTheme(value);
  }

  setDark() { this.setTheme('dark'); }
  setLight() { this.setTheme('light'); }

  toggleTheme() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  isDark() { return this.theme() === 'dark'; }
}
