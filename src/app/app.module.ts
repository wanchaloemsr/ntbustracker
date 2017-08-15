import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {appRoute} from '../routes';
import { FavouritesComponent } from './favourites/favourites.component'


const appRoutes: Routes = [
  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
