import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    CommonModule,
    DatatableComponent,
    AppComponent
  ],
  providers: []
})
export class AppModule { }