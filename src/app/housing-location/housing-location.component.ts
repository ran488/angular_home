import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
	CommonModule,
	RouterLink,
	RouterOutlet
  ],
  template: `
	  <section class="listing">
		<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
		<h2 class="listing-heading">{{ housingLocation.name }}</h2>
		<p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
		<a [routerLink]="['/details', housingLocation.id]">Learn More</a>
	  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})


export class HousingLocationComponent {
	/* 
	 The exclamation point is called the non-null assertion operator and it tells the TypeScript 
	 compiler that the value of this property won't be null or undefined.
	 https://angular.io/tutorial/first-app/first-app-lesson-05
	*/
	@Input() housingLocation!: HousingLocation;
	
}
