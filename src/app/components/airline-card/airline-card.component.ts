import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AirlineModel } from 'src/app/models/AirlineModel';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-airline-card',
  templateUrl: './airline-card.component.html',
  styleUrls: ['./airline-card.component.scss']
})
export class AirlineCardComponent implements OnInit {
  @Input() airline!:AirlineModel
  @Output() airlineEvent=new EventEmitter<AirlineModel[]>()
  constructor(private _service:HttpserviceService) { }
  airlines:AirlineModel[]= [];
  onBlock(){
   var data=this.airline;
   data.discription="";
   data.isActive=false;
   this.apiCall(data);
  }
  onUnBlock(){
    var data=this.airline;
    data.discription="";
   data.isActive=true;
   this.apiCall(data);
  }
  apiCall(body:AirlineModel){
     console.log(JSON.stringify(body));
     this._service.POST(ServiceEndpoints.UPDATE_AIRLINR,false,body)
     .subscribe(
      (result:AirlineModel[])=>{
         this.airlines=result
         this.airlineEvent.emit(this.airlines);
      }
     )
  }
  ngOnInit(): void {
  }

}
