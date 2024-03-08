import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="Housinglocation.photo" alt="Exterior photo of {{Housinglocation.name}}">
    <h2 class="listing-heading">{{ Housinglocation.name }}</h2>
    <p class="listing-location">{{ Housinglocation.city}}, {{Housinglocation.state }}</p>
    <a [routerLink]="['/details', Housinglocation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() Housinglocation!: Housinglocation;
}
