import { BookingFlightModel } from "./BookingFlightModel";
import { Passenger } from "./Passenger";

export class Booking{
    /**
     *
     */
    constructor(
        public flightDetails:BookingFlightModel,
        public passengers:Passenger[]
    ) {
        

    }
}