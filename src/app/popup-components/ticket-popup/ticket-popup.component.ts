import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-ticket-popup',
  templateUrl: './ticket-popup.component.html',
  styleUrls: ['./ticket-popup.component.scss']
})
export class TicketPopupComponent implements OnInit {
//  data = {
//   "pnrNo": 8013674,
//   "noOfSeats": 1,
//   "isCancelled": false,
//   "flightDetail": {
//     "flightNumber": "A098",
//     "flightId": 11,
//     "airlineName": "Airindia",
//     "logo": "string",
//     "totalCost": 10000,
//     "fromPlace": "BBSR",
//     "toPlace": "BLR",
//     "startDate": "2022-08-02T00:00:00",
//     "endDate": "2022-08-02T00:00:00"
//   },
//   "passengers": [
//     {
//       "name": "H",
//       "age": 23,
//       "seatNo": "1A",
//       "isOptedForMeal": true
//     }
//   ]
// }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Ticket
  ) { }

  ngOnInit(): void {
  }

}
