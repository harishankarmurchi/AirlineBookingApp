import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AirlineModel } from 'src/app/models/AirlineModel';

@Component({
  selector: 'app-ailine-popup',
  templateUrl: './ailine-popup.component.html',
  styleUrls: ['./ailine-popup.component.scss']
})
export class AilinePopupComponent implements OnInit {

  airline:AirlineModel|any;
  addAirlineForm: FormGroup | any;
  constructor(public dialogRef: MatDialogRef<AilinePopupComponent>) {
    this.addAirlineForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]) 
    });
   }

   onSubmit(){
    if(!this.addAirlineForm.valid){
      return;
    }
    var canvas = document.createElement("canvas");
    var dataURL = canvas.toDataURL(this.addAirlineForm.value.logo)
    this.airline= new AirlineModel(
      this.addAirlineForm.value.name,
      this.addAirlineForm.value.address,
      this.addAirlineForm.value.description,
      dataURL.replace(/^data:image\/(png|jpg);base64,/, ""),
      this.addAirlineForm.value.contactNo,
      true,0
      );
    this.dialogRef.close(this.airline);
  }

  closeDailog(){
    console.log("close")
    this.dialogRef.close("hi");
  }
  ngOnInit(): void {
  }

}
