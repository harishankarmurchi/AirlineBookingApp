import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoaderComponent } from '../popup-components/loader/loader.component';
import {Responsevm} from '../models/Responsevm'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  dailogConfig= new MatDialogConfig();

  url= environment.gatewayurl;
  
  constructor(private _http:HttpClient,private spinner:MatDialog) { 
  this.dailogConfig.autoFocus=true;
  this.dailogConfig.disableClose=true;
  this.dailogConfig.width = "10%";
  }
  
  get(route:string,isAuthRequired=false):Observable<any>{
   var headers= this.getHeadder();
   var uri=this.url+route;
   var dailogref=this.spinner.open(LoaderComponent,this.dailogConfig);
   return this._http.get<Responsevm>(uri,{headers}).pipe(map(response =>{
    dailogref.close();
    if(response.statusCode==200)
    {
      return response.data
    }
    else
    {
      return null
    }
   }
   ),catchError(err=>{ dailogref.close(); return err})

   )
   }


  POST(route:string,isAuthRequired=false,body:any):Observable<any>{
    var uri=this.url+route;
    var dailogref=this.spinner.open(LoaderComponent,this.dailogConfig);
    return this._http.post<Responsevm>(uri,body).pipe(map(response =>{
      dailogref.close();
      if(response.statusCode==200)
      {
        return response.data
      }
      else
      {
        return null
      }
     }
     )
     ) ;
  }

  Delete(route:string,isAuthRequired=false):Observable<any>{
    var headers= this.getHeadder();
    var uri=this.url+route;
    var dailogref=this.spinner.open(LoaderComponent,this.dailogConfig);
    console.log(headers);
    return this._http.delete<Responsevm>(uri,{headers}).pipe(map(response =>{
     dailogref.close();
     if(response.statusCode==200)
     {
       return response.data
     }
     else
     {
       return null
     }
    }
    ),catchError(err=>{ dailogref.close(); return err})
 
    )
    }

  getHeadder()
  {
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorize', 'Bearer '+localStorage.getItem('token'))
  .set('Access-Control-Allow-Origin', '*');
  return headers;
  }
}
