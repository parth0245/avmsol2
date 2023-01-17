import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { AudioComponent } from './components/audio/audio.component';
import { DisplaysComponent } from './components/displays/displays.component';
import { LightingComponent } from './components/lighting/lighting.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityComponent,
    TemperatureComponent,
    AudioComponent,
    DisplaysComponent,
    LightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
