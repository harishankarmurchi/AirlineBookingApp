import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.scss']
})
export class HeadderComponent implements OnInit {
  isAdmin=false;
  constructor(private router:Router,private _interact:InteractionService) { }

  onLogout(){
   
   localStorage.clear();
   this.isAdmin=false;
   this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this._interact.loginmessage$.subscribe(
      message =>{
        this.isAdmin=message
      }
    )
  }

  

}
