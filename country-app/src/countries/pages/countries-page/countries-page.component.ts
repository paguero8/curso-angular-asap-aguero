import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.css'
})
export class CountriesPageComponent {

}
