import { Component } from '@angular/core';
import { result } from './testing-data/writeup/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'data-grid-workspace';
  dataSet = result.data;
  columns = result.columns;

  pagginationConfig = {
    limit: result.limit,
    totalResults: result.total,
    totalPages: result.totalPages,
    page: result.page
  }
}

