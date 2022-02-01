import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebcamComponent } from './webcam/webcam.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    AboutUsComponent,
    WebcamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatTabsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
