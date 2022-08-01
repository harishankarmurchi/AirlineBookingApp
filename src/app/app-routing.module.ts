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
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'search',
    component:SearchComponent,
    canActivate:[AuthGuard]
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
    component:AddAirlineComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"addflight",
    component:AddFlightComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"pnrstatus",
    component:PnrstatusComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:"mytickets",
    component:MyticketsComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
