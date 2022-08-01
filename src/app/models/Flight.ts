import { AirlineModel } from "./AirlineModel";

export class Flight{

    constructor(
        public airlineId:number,
        public airline:AirlineModel,
        public flightNumber:string,
        public flightId:number,
        public startDate:Date,
        public endDate:Date,
        public instrumentUsed:string,
        public businessClassSeats:number,
        public nonBusinessClasssSeats:number,
        public noOfRows:number,
        public ticketCost:number,
        public mealTypeId:number,
        public fromPlaceId:number,
        public toPlaceId:number,
        public toPlaceName:string,
        public fromPlaceName:string,
        public mealTypeName:string,
        public seats:any,
        public shedhuleDays:string[],

    ) {


    }
}