import { Component } from '@angular/core';

import { ShapesService } from './shapes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShapesService]
})
export class AppComponent {
  title = 'app';
}
