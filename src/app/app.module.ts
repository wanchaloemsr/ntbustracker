import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing'

import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header.component';
import { MapComponent } from './map/map.component';
import { TimetablesComponent } from './timetables/timetables.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component'

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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfiDo0zbigHQFKKir0U6SkBT238M0m3V8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
