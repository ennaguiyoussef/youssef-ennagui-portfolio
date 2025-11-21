import { Component } from '@angular/core';
import { HeroSection } from '../sections/hero/hero';
import { StatsSection } from '../sections/stats/stats';
import { CompetencesSection } from '../sections/competences/competences';
import { ProjetsSection } from '../sections/projets/projets';
import { ParcoursSection } from '../sections/parcours/parcours';
import { BlogsSection } from '../sections/blogs/blogs';
import { ContactsSection } from '../sections/contacts/contacts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSection, StatsSection, CompetencesSection, ProjetsSection, ParcoursSection, BlogsSection, ContactsSection],
  templateUrl: './home.html'
})
export class Home {}
