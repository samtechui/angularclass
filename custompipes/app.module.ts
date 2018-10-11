import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ShortenPipe} from './shorten.pipe';
import { SamplePipe } from './sample.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    SamplePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
