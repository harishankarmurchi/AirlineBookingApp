import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeadderComponent } from './components/headder/headder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AddAirlineComponent } from './components/add-airline/add-airline.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { BookingComponent } from './components/booking/booking.component';
import { MyticketsComponent } from './components/mytickets/mytickets.component';
import {HttpClientModule} from '@angular/common/http'
import { AilinePopupComponent } from './popup-components/ailine-popup/ailine-popup.component';
import { FlightPopupComponent } from './popup-components/flight-popup/flight-popup.component';
import { AirlineCardComponent } from './components/airline-card/airline-card.component';
import { LoaderComponent } from './popup-components/loader/loader.component'
import { MaterialModule } from './material/material.module';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { DatePipe } from '@angular/common';
import { ResheduleComponent } from './popup-components/reshedule/reshedule.component';
import { TicketPopupComponent } from './popup-components/ticket-popup/ticket-popup.component';
import { MyTicketComponent } from './components/my-ticket/my-ticket.component';
import { PnrstatusComponent } from './components/pnrstatus/pnrstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadderComponent,
    RegisterComponent,
    SearchComponent,
    AddAirlineComponent,
    AddFlightComponent,
    BookingComponent,
    MyticketsComponent,
    AilinePopupComponent,
    FlightPopupComponent,
    AirlineCardComponent,
    LoaderComponent,
    FlightCardComponent,
    ResheduleComponent,
    TicketPopupComponent,
    MyTicketComponent,
    PnrstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
