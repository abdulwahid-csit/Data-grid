import { NgModule } from '@angular/core';
import { DataGridComponent } from './data-grid/data-grid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [DataGridComponent, FilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [DataGridComponent],
})
export class DataGridModule {}
