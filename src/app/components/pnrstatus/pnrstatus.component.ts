import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { Ticket } from 'src/app/models/Ticket';
import { TicketPopupComponent } from 'src/app/popup-components/ticket-popup/ticket-popup.component';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-pnrstatus',
  templateUrl: './pnrstatus.component.html',
  styleUrls: ['./pnrstatus.component.scss']
})
export class PnrstatusComponent implements OnInit {
  pnrForm:FormGroup|any;
  constructor(
    private _service:HttpserviceService,
    private dailog:MatDialog
  ) {
    this.pnrForm= new FormGroup({
      pnrno:new FormControl('')
    })
   }

   onSubmit(){
    var pnrno= this.pnrForm.value.pnrno;
    var url= ServiceEndpoints.GET_BY_PNR+pnrno
this._service.get(url).subscribe(
  (res:Ticket)=>{
    var dailogConfig= new MatDialogConfig();
    dailogConfig.autoFocus=true;
    dailogConfig.disableClose=true;
    dailogConfig.width = "90%";
    dailogConfig.data=res;
    this.dailog.open(TicketPopupComponent,dailogConfig);
  }
)
   }

  ngOnInit(): void {
  }

}
