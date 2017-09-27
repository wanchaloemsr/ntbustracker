import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-service-stop',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceStopComponent implements OnInit {


  constructor(_dataService: DataService) {


  }

  ngOnInit() {

  }

  

}