import {Routes, RouterModule} from '@angular/router'

import { FavouritesComponent } from './favourites/favourites.component'
import { TimetablesComponent } from './timetables/timetables.component'
import { MapComponent } from './map/map.component'
import { MaprouteComponent } from './maproute/maproute.component'
import { RouteComponent } from './timetables/route.component'
import { UsefullinkComponent } from './usefullink/usefullink.component'


const APP_ROUTES: Routes = [

	{ path: '', redirectTo: 'timetables', pathMatch: 'full'},
	{ path: 'favourites', component: FavouritesComponent},
	{ path: 'timetables', component: TimetablesComponent},
	{ path: 'map', component: MapComponent},
	{ path: 'timetables/route/:shape_id', component: MaprouteComponent},
	{ path: 'usefullink', component: UsefullinkComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);