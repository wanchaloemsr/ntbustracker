import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header.component';
import { MapComponent } from './map/map.component';
import { TimetablesComponent } from './timetables/timetables.component';
import { RouteComponent } from './timetables/route.component';
import { RouteTimeComponent } from './timetables/route-time.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { MaprouteComponent } from './maproute/maproute.component';

import { UiSwitchModule } from '../../node_modules/angular2-ui-switch';

/*
const appRoutes: Routes = [
  { path: 'favourites', component: FavouritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
*/


@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    HeaderComponent,
    MapComponent,
    TimetablesComponent,
    SearchComponent,
    HomeComponent,
    RouteComponent,
    RouteTimeComponent,
    MaprouteComponent

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
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
