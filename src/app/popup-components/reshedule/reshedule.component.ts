import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/Flight';
import { Reshedule } from 'src/app/models/Reshedule';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-reshedule',
  templateUrl: './reshedule.component.html',
  styleUrls: ['./reshedule.component.scss']
})
export class ResheduleComponent implements OnInit {
  sheduleForm:FormGroup|any;
  resheduleData:Reshedule|any;
  constructor(public dialogRef: MatDialogRef<ResheduleComponent>,
    private _service:HttpserviceService,
    private datepipe:DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: Flight
    ) { 
    this.sheduleForm= new FormGroup({
      startDate:new FormControl('',[Validators.required]),
      endDate:new FormControl('',Validators.required)
  })
  }


  ngOnInit(): void {
  }

  onSubmit(){
    
    this.resheduleData=this.sheduleForm.value
    this.resheduleData.startDate=this.datepipe.transform(this.resheduleData.startDate,'yyyy-MM-dd')
    this.resheduleData.endDate=this.datepipe.transform(this.resheduleData.endDate,'yyyy-MM-dd')
    this.resheduleData.flightId=this.data.flightId;
    console.log(this.resheduleData);
    this._service.POST(ServiceEndpoints.UPDATE_FLIGHT,false,this.resheduleData)
    .subscribe(
      (result:Flight)=>{
        this.dialogRef.close(result);
        console.log(result)
      }
    )
    


  }



}
