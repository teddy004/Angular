import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class='listing-photo' [src]='housingLocation?.photo'>
      <section class='listing-description'>
        <h2 class=listing-heading> {{housingLocation?.name}}</h2>
        <p class='listing-location'>{{housingLocation?.city}}, 
        {{housingLocation?.state}}</p>
      </section>
      <section class=listing-features>
        <h2 class=section-heading>About this housing Location</h2>
          <ul>
            <li>Unites available: {{housingLocation?.availableUnits}}</li>
            <li>Does this Location have wifi: {{housingLocation?.wifi}}</li>
            <li>Does this Location have loundry: {{housingLocation?.laundry}}</li>
          </ul>
          </section>
          <section class='listing-apply'>
            <h2 class='section-heading'>Apply now to live here</h2>
            <button class='primary' type='button'>Apply now</button>
          </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}
