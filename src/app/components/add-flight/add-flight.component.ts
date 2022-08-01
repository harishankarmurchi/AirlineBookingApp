import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AirlineModel } from 'src/app/models/AirlineModel';
import { Flight } from 'src/app/models/Flight';
import { Place } from 'src/app/models/Place';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  places:Place[]|any;
  meals:any[]|any;
  airlines:AirlineModel[]|any;
  addFlightForm:FormGroup|any;
  flightData:Flight|any;
  weekList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
  constructor(private _service:HttpserviceService,
    private datepipe:DatePipe,
    public dialogRef: MatDialogRef<AddFlightComponent>
    ) {
    this.addFlightForm= new FormGroup({
      flightNumber:new FormControl(''),
      startDate:new FormControl(''),
      endDate:new FormControl(''),
      mealTypeId:new FormControl(''),
      toPlaceId:new FormControl(''),
      fromPlaceId:new FormControl(''),
      noOfRows:new FormControl(''),
      businessClassSeats:new FormControl(''),
      nonBusinessClassSeats:new FormControl(''),
      shedhuleDays:new FormControl(''),
      instrumentUsed: new FormControl(''),
      ticketCost:new FormControl(''),
      airlineId:new FormControl('')

    })
   }

   onSubmit(){
    this.flightData=this.addFlightForm.value
    this.flightData.airline=null;
    this.flightData.seats=null;
    this.flightData.toPlaceName=null;
    this.flightData.fromPlaceName=null;
    this.flightData.mealTypeName=null;
    this.flightData.startDate=this.datepipe.transform(this.flightData.startDate,'yyyy-MM-dd')
    this.flightData.endDate=this.datepipe.transform(this.flightData.endDate,'yyyy-MM-dd')
    console.log(JSON.stringify(this.flightData))
    this._service.POST(ServiceEndpoints.ADD_FLIGHT,false,this.flightData)
    .subscribe(
      result =>{
        this.dialogRef.close(result);
      }
    )
   }

  ngOnInit(): void {
    this._service.get(ServiceEndpoints.GET_AIRLINE_MASTER_DATA)
    .subscribe(
      result =>{
         this.places=result.places
         this.meals=result.mealTypes
         console.log(this.places)
         console.log(this.meals)

      }
    )
    this._service.get(ServiceEndpoints.GET_AIRLINES)
    .subscribe(
      result =>{
         this.airlines=result
         console.log(this.airlines)

      }
    )
  }

}
