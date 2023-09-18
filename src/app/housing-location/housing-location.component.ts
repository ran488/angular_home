import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
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
