import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SearchComponent } from 'src/app/components/search/search.component';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  discounts:any;
  form:FormGroup|any;
  constructor(private _service:HttpserviceService,public dialogRef: MatDialogRef<DiscountComponent>,) { 
    this.form= new FormGroup({
      discount:new FormControl(0)
    })
  }

  onSubmit(){
    this.dialogRef.close(this.form.value.discount);
  }

  ngOnInit(): void {
    this._service.get(ServiceEndpoints.GET_Discounts).subscribe(
      res =>{
        this.discounts=res;
      }
    )
  }

}
