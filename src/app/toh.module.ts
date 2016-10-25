import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TohComponent } from './toh.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    TohComponent,
    HeroDetailComponent
  ],
  bootstrap: [ TohComponent ]

})
export class TohModule { }