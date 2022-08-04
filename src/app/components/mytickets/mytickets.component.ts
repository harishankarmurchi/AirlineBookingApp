import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { Ticket } from 'src/app/models/Ticket';
import { TicketPopupComponent } from 'src/app/popup-components/ticket-popup/ticket-popup.component';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.scss']
})
export class MyticketsComponent implements OnInit {
 tickets:Ticket[]|any;
  constructor(
    private _service:HttpserviceService,
    private dailog:MatDialog
  ) { }

  ngOnInit(): void {
    this._service.get(ServiceEndpoints.GET_MY_TICKETS).subscribe(
      (res:Ticket[])=>{
         this.tickets=res;
         console.log(this.tickets);
      }
    )
  }

  onShow(item:Ticket){
    var dailogConfig= new MatDialogConfig();
    dailogConfig.autoFocus=true;
    dailogConfig.width = "90%";
    dailogConfig.data=item;
    this.dailog.open(TicketPopupComponent,dailogConfig);
  }
  onCancel(item:Ticket){
    var url= ServiceEndpoints.CANCEL_TICKET+item.pnrNo
    this._service.Delete(url).subscribe(
      result =>{
        console.log(result)
        item.isCancelled=true;
      }
    )
  }

}
