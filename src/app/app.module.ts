import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FavouritesComponent } from './favourites/favourites.component';
import { FavouritesRouteComponent } from './favourites/favourites-route.component';
import { FavouritesTimeComponent } from './favourites/favourites-time.component';
import { ServiceStopComponent } from './favourites/stop-service/service.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MapComponent } from './map/map.component';
import { TimetablesComponent } from './timetables/timetables.component';
import { RouteComponent } from './timetables/route.component';
import { RouteTimeComponent } from './timetables/route-time.component';
import { MaprouteComponent } from './maproute/maproute.component';

import {SelectModule} from 'ng2-select';

import { DataService } from './data.service';
import { AliceSpringsDataService } from './AliceSpringsData.service';

import {CacheService, CacheStorageAbstract, CacheLocalStorage} from 'ng2-cache/ng2-cache';
import { FilterLocationPipe } from './filter-location.pipe';
import { UsefullinkComponent } from './usefullink/usefullink.component';
import { AlicespringsTimetableComponent } from './alicesprings/alicesprings-timetable/alicesprings-timetable.component';
import { AlicespringsMapComponent } from './alicesprings/alicesprings-map/alicesprings-map.component';
import { AlicespringsRouteComponent } from './alicesprings/alicesprings-route/alicesprings-route.component';
import { AliceRouteTimeComponent } from './alicesprings/alice-route-time/alice-route-time.component';
import { AliceRouteMapComponent } from './alicesprings/alice-route-map/alice-route-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    FavouritesTimeComponent,
    FavouritesRouteComponent,
    ServiceStopComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    TimetablesComponent,
    RouteComponent,
    RouteTimeComponent,
    MaprouteComponent,
    FilterLocationPipe,
    UsefullinkComponent,
    AlicespringsTimetableComponent,
    AlicespringsMapComponent,
    AlicespringsRouteComponent,
    AliceRouteTimeComponent,
    AliceRouteMapComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfiDo0zbigHQFKKir0U6SkBT238M0m3V8'
    }),
    AgmSnazzyInfoWindowModule,
    NgbModule.forRoot(),
    SelectModule
  ],

  providers: [
  DataService,
  AliceSpringsDataService, 
  CacheService, 
  {provide: CacheStorageAbstract, useClass:CacheLocalStorage}
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
