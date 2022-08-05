import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { AirlineModel } from 'src/app/models/AirlineModel';
import { Responsevm } from 'src/app/models/Responsevm';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { AilinePopupComponent } from 'src/app/popup-components/ailine-popup/ailine-popup.component';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.scss']
})
export class AddAirlineComponent implements OnInit {
  airline:AirlineModel|any
  airlines:AirlineModel[]|any
  nonBlockedAirlines:AirlineModel[]|any
  blockedAirlines:AirlineModel[]|any
  list=[1,2,3,4,5,6]
  constructor(private dailog:MatDialog,private _service:HttpserviceService) { }
  
  onAddAirline(){
    var dailogConfig= new MatDialogConfig();
    dailogConfig.autoFocus=true;
    dailogConfig.disableClose=true;
    dailogConfig.width = "60%";
    
    var data =this.dailog.open(AilinePopupComponent,dailogConfig)
    var url= ServiceEndpoints.ADD_AIRLINR
    data.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.airline= result;
      this._service.POST(url,false,this.airline).subscribe(
        res => {
          console.log(res);
          this.handelEvent();
        }
      );
      
      
    }
    );

    
    
    
  }
  handelEvent(){
    this.ngOnInit();
  }
  ngOnInit() {

    var url= "/flight/Master/airline"
    this._service.get(url,false).subscribe(
        (response:AirlineModel[]) =>{
          console.log(response);
          this.airlines=response;

          this.blockedAirlines=response.filter(x =>{
            return x.isActive===false
          })
          this.nonBlockedAirlines=response.filter(x =>{
            return x.isActive===true
          })
        }
      );
  
  }

}
