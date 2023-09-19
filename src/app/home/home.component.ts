import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
	CommonModule, 
	HousingLocationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #cfilter>
	  <button class="primary" type="button" (click)="filterResults(cfilter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
	</app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // replace static array of houses and instead pull them from a service
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  // https://angular.io/tutorial/first-app/first-app-lesson-13
  filteredLocationList: HousingLocation[] = [];
  
  
  filterResults(text: string) {
	  if (!text) {
		this.filteredLocationList = this.housingLocationList;
	  }

	  this.filteredLocationList = this.housingLocationList.filter(
		housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
	  );
  }

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
	this.filteredLocationList = this.housingLocationList;
  }
}
