import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  
  private _loginSource= new Subject<boolean>();
  loginmessage$=this._loginSource.asObservable();
  constructor() { }
  
  onlogin(){
    var role= localStorage.getItem('role')
    var isAdmin= false;
    if(role != undefined && role === 'Admin')
    {
      isAdmin=true;
    }
    this._loginSource.next(isAdmin);

  }
}
