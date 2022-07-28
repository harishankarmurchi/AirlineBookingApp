import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AirlineBookingApp';
  isLoggedin:boolean=false
  constructor() {
    localStorage.setItem('token',"abc");
    var x = localStorage.getItem('token');
    if(x!=undefined && x!= null )
    {
      this.isLoggedin=true;
    }
    
  }
}
