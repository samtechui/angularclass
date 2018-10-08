import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {Attributedirectve} from './basicdirectives/attributedirectve';
import { RendererdirectiveDirective } from './basicdirectives/rendererdirective.directive';
import {HostbindingDurective} from './basicdirectives/hostbinding.durective';
import {Dynamicbinding} from './basicdirectives/dynamicbinding';
import { SampledirectiveDirective } from './sampledirective.directive';


@NgModule({
  declarations: [
    AppComponent,
    Attributedirectve,
    RendererdirectiveDirective,
    HostbindingDurective,
    Dynamicbinding,
    SampledirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
