import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AirlineModel } from 'src/app/models/AirlineModel';
import { Flight } from 'src/app/models/Flight';
import { Place } from 'src/app/models/Place';
import { Search } from 'src/app/models/Search';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  flightList:Flight[]|any;
  searchForm:FormGroup|any;
  airlineList:AirlineModel[]|any
  searchFormData:Search|any
  places:Place[]|any
  isAdmin=false;
  list=[1,2,3,4,5,6,7,8,9,10]
  constructor(private dailog:MatDialog,
    private _service:HttpserviceService,
    private datepipe:DatePipe
    ) { 
      this.searchForm = new FormGroup({
        toPlaceId: new FormControl('', [Validators.required]),
        fromPlaceId: new FormControl('', [Validators.required]),
        journeyDate:new FormControl('',[Validators.required])
      });
    }

    onSubmit(){
      this.searchFormData= this.searchForm.value;
      // var date=this.searchFormData.journeyDate;
      // var newDate= date.setDate(date.getDate()+1);
       this.searchFormData.journeyDate=this.datepipe.transform(this.searchFormData.journeyDate,'yyyy-MM-dd')
       console.log(this.searchFormData)
       this._service.POST(ServiceEndpoints.SEARCH,false,this.searchFormData)
     .subscribe(
      (res:Flight)=>{this.flightList=res;
        console.log(this.flightList);
      }
     )
    }

    openDailog(){
      var dailogConfig= new MatDialogConfig();
    dailogConfig.autoFocus=true;
    dailogConfig.disableClose=false;
    dailogConfig.width = "90%";
    
    var data =this.dailog.open(AddFlightComponent,dailogConfig);
    data.afterClosed().subscribe(
      result => {
        
        this.flightList= result;
      })
    }

  ngOnInit(): void {
    var role= localStorage.getItem('role')
    if(role!= undefined && role=='Admin')
    {
      this.isAdmin=true;
    }
    this._service.get(ServiceEndpoints.GET_AIRLINE_MASTER_DATA)
    .subscribe(
      result =>{
         this.places=result.places

      }
    )
    //  var body={
    //   "toPlaceId": 3,
    //   "fromPlaceId": 2,
    //   "journeyDate": "2022-07-30T11:21:18.625Z",
    //   "airlineId": 0
    // }
    //  this._service.POST(ServiceEndpoints.SEARCH,false,body)
    //  .subscribe(
    //   (res:Flight)=>{this.flightList=res;
    //     console.log(this.flightList);
    //   }
    //  )
     
  }

}
