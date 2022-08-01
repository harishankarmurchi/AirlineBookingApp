import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './components/add-airline/add-airline.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { LoginComponent } from './components/login/login.component';
import { MyTicketComponent } from './components/my-ticket/my-ticket.component';
import { MyticketsComponent } from './components/mytickets/mytickets.component';
import { PnrstatusComponent } from './components/pnrstatus/pnrstatus.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:"addairline",
    component:AddAirlineComponent
  },
  {
    path:"addflight",
    component:AddFlightComponent
  },
  {
    path:"pnrstatus",
    component:PnrstatusComponent
  }
  ,
  {
    path:"mytickets",
    component:MyticketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
