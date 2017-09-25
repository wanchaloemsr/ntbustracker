import {Routes, RouterModule} from '@angular/router'

import { FavouritesComponent } from './favourites/favourites.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { TimetablesComponent } from './timetables/timetables.component'
import { MapComponent } from './map/map.component'
import { MaprouteComponent } from './maproute/maproute.component'
//import { RouteComponent } from './route/route.component'
import { RouteComponent } from './timetables/route.component'


const APP_ROUTES: Routes = [

	{ path: '', redirectTo: 'timetables', pathMatch: 'full'},
	{ path: 'favourites', component: FavouritesComponent},
	{ path: 'search', component: SearchComponent},
	{ path: 'timetables', component: TimetablesComponent},
	{ path: 'map', component: MapComponent},
	{ path: 'timetables/route/:shape_id', component: MaprouteComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);