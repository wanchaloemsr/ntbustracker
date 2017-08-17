import {Routes, RouterModule} from '@angular/router'

import { FavouritesComponent } from './favourites/favourites.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { TimetablesComponent } from './timetables/timetables.component'
import { MapComponent } from './map/map.component'


const APP_ROUTES: Routes = [

	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'favourites', component: FavouritesComponent},
	{ path: 'search', component: SearchComponent},
	{ path: 'timetables', component: TimetablesComponent},
	{ path: 'map', component: MapComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);