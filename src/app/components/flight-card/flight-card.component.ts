import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Flight } from 'src/app/models/Flight';
import { Ticket } from 'src/app/models/Ticket';
import { ResheduleComponent } from 'src/app/popup-components/reshedule/reshedule.component';
import { TicketPopupComponent } from 'src/app/popup-components/ticket-popup/ticket-popup.component';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  isAdmin=false;
  image:any;
  constructor(private dailog:MatDialog) { }
  @Input() item!:Flight

  ngOnInit(): void {
    var role= localStorage.getItem('role')
    if(role!= undefined && role=='Admin')
    {
      this.isAdmin=true;
    }
   var utfencode= new TextEncoder();
   this.image= this.item.airline.logo;
  }

  
  onBook(){
    var dailogConfig= new MatDialogConfig();
    dailogConfig.autoFocus=true;
    dailogConfig.disableClose=true;
    dailogConfig.width = "90%";
    dailogConfig.data=this.item
    var ref=this.dailog.open(BookingComponent,dailogConfig);
    ref.afterClosed().subscribe(
      (res:Ticket|string) =>{
        if(res!= "")
        {
        console.log(res);
        dailogConfig.data=res;
        this.dailog.open(TicketPopupComponent,dailogConfig)
        }
      }
    )
  }

  onReshedule(){
    var dailogConfig= new MatDialogConfig();
    dailogConfig.autoFocus=true;
    dailogConfig.disableClose=false;
    dailogConfig.width = "90%";
    dailogConfig.data=this.item
    this.dailog.open(ResheduleComponent,dailogConfig);
  }

}
