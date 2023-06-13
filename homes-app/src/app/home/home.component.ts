import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
  HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type='text' placeholder='Filter by City..'>
        <button class='primary' type='button'>Search</button>
      </form>
    </section>
     <section class='results'>
        <app-housing-location *ngFor='let housingLocation of housinglocationList'
        [housingLocation]='housingLocation'></app-housing-location>
    </section>
    
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housinglocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housinglocationList = this.housingService.
      getAllHousingLocations();
  }

}
