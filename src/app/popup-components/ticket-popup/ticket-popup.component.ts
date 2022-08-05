import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/Ticket';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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
html:any
exportHtmlToPDF(){
  this.html = document.getElementById('htmltable');
    console.log(this.html)
    html2canvas(this.html).then(canvas => {
        
        let docWidth = 208;
        let docHeight = canvas.height * docWidth / canvas.width;
        
        const contentDataURL = canvas.toDataURL('image/png')
        let doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
        
        doc.save('ticket.pdf');
    });
}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Ticket
  ) { }

  ngOnInit(): void {
  }

}
