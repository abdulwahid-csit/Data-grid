import { NgModule } from '@angular/core';
import { DataGridComponent } from './data-grid/data-grid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { DraggableHeaderDirective } from './directives/draggable-header.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [DataGridComponent, FilterPipe, DraggableHeaderDirective],
  imports: [CommonModule, FormsModule, DragDropModule, BrowserAnimationsModule],
  exports: [DataGridComponent, DraggableHeaderDirective],
  providers: [],
})
export class DataGridModule {}
