import { NgModule } from '@angular/core';
import { DataGridComponent } from './data-grid/data-grid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [DataGridComponent, FilterPipe],
  imports: [CommonModule, FormsModule, ScrollingModule],
  exports: [DataGridComponent],
})
export class DataGridModule {}
