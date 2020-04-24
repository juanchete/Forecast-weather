import { Component, OnInit } from '@angular/core';
import { ForecastServiceService } from '../services/forecast-service.service';
import { showUpStaggered } from '../animations/showUp.animation';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  animations: [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor(public forecast : ForecastServiceService) { }

  ngOnInit(): void {
  }

}
