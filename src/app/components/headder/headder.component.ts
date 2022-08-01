import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.scss']
})
export class HeadderComponent implements OnInit {

  constructor(private router:Router) { }

  onLogout(){
   
   localStorage.clear()
   this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
