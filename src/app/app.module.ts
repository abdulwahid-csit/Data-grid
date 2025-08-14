import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataGridModule } from 'data-grid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
