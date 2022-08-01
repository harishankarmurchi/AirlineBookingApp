import { BookingFlightModel } from "./BookingFlightModel";
import { Passenger } from "./Passenger";

export class Ticket{
    constructor(
        public pnrNo:number,
        public noOfSeats:number,
        public isCancelled:boolean,
        public flightDetail:BookingFlightModel,
        public passengers:Passenger[]
    ){}
}