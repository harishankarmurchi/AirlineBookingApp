import { JsonpInterceptor } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from 'src/app/models/Booking';
import { BookingFlightModel } from 'src/app/models/BookingFlightModel';
import { Flight } from 'src/app/models/Flight';
import { Passenger } from 'src/app/models/Passenger';
import { seat } from 'src/app/models/Seat';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
 
   passengerlist:Passenger[]|any=[];
   passengerForm: FormGroup | any;
   seats:seat[]
   amount:number|any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Flight,
    private _service:HttpserviceService,
    public dialogRef: MatDialogRef<BookingComponent>
  ) {
    this.passengerForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      age: new FormControl('', [Validators.required,]),
      seatNo: new FormControl('', [Validators.required,]),
      isOptedForMeal: new FormControl('', [Validators.required,]),
    });
    this.seats=this.data.seats;
   }

  onAdd(){
    var passenger= new Passenger(
      this.passengerForm.value.name,
      this.passengerForm.value.age,
      this.passengerForm.value.seatNo.seatName,
      this.passengerForm.value.isOptedForMeal
    )
    var item= this.passengerForm.value.seatNo;
    this.passengerForm.reset();
    this.passengerlist.push(passenger);
    console.log(this.passengerlist);
    
    var index= this.seats.indexOf(item);
    item.isBooked=true;
    this.seats[index]=item
    console.log(this.seats);
    this.amount= this.data.ticketCost*this.passengerlist.length
    //this.onSubmit()
  }

  onSubmit(){
     var flightDetails= new BookingFlightModel(
      this.data.flightNumber,
      this.data.flightId,
      this.data.airline.name,
      this.data.airline.logo,
      this.amount,
      this.data.fromPlaceName,
      this.data.toPlaceName,
      this.data.startDate,
      this.data.endDate
     );
     var body= new Booking(
      flightDetails,
      this.passengerlist
     )
     console.log(JSON.stringify(body));
     this._service.POST(ServiceEndpoints.BOOK_TICKET,false,body).subscribe(
      res =>{
        console.log(res);
        this.dialogRef.close(res);

      }
     )
     
  }

  ngOnInit(): void {
  }

}
