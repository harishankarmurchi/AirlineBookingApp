import { Component, Input, OnInit } from '@angular/core';
import { AirlineModel } from 'src/app/models/AirlineModel';

@Component({
  selector: 'app-airline-card',
  templateUrl: './airline-card.component.html',
  styleUrls: ['./airline-card.component.scss']
})
export class AirlineCardComponent implements OnInit {
  @Input() airline!:AirlineModel
  constructor() { }

  ngOnInit(): void {
  }

}
