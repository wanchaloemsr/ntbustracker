import {Routes, RouterModule} from '@angular/router'


//Darwin and rural area
import { FavouritesComponent } from './favourites/favourites.component'
import { TimetablesComponent } from './timetables/timetables.component'
import { MapComponent } from './map/map.component'
import { MaprouteComponent } from './maproute/maproute.component'
import { RouteComponent } from './timetables/route.component'
import { UsefullinkComponent } from './usefullink/usefullink.component'

//AliceSprings
import { AlicespringsTimetableComponent } from './alicesprings/alicesprings-timetable/alicesprings-timetable.component'
import { AlicespringsMapComponent } from './alicesprings/alicesprings-map/alicesprings-map.component'


const APP_ROUTES: Routes = [

	{ path: '', redirectTo: 'timetables', pathMatch: 'full'},
	{ path: 'favourites', component: FavouritesComponent},
	{ path: 'timetables', component: TimetablesComponent},
	{ path: 'map', component: MapComponent},
	{ path: 'timetables/route/:shape_id', component: MaprouteComponent},
	{ path: 'usefullink', component: UsefullinkComponent},
	{ path: 'alicesprings', component: AlicespringsTimetableComponent},
	{ path: 'alicesprings/map', component: AlicespringsMapComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);