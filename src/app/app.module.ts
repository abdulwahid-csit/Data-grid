import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataGridModule } from 'data-grid';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
