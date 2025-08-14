import { Component } from '@angular/core';
import { result } from './testing-data/writeup/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-grid-workspace';
  dataSet = result.results;
  columns = result.config.columns;

  pagginationConfig = {
    limit: result.config.limit,
    totalResults: result.config.totalResults,
    totalPages: result.config.totalPages,
    page: result.config.page
  }
}
