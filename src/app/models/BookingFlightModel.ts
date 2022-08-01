export class BookingFlightModel{
    constructor(
        public  flightNumber:string,
        public  flightId:number,
        public  airlineName:string,
        public  logo:string,
        public  totalCost:number,
        public  fromPlace:string,
        public  toPlace:string,
        public  startDate:Date,
        public  endDate:Date,
    ){}
}