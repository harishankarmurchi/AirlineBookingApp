export const ServiceEndpoints={
    GET_ROLES:"/user/User/getroles",
    LOG_IN:"/user/User/login",
    REGISTER:"/user/User/register",
    REFRESHTOKEN:"",


    ADD_FLIGHT:"/flight/Airline/inventory/add",
    ADD_AIRLINR:"/flight/Airline/addairline",
    GET_AIRLINES:"/flight/Master/airline",
    GET_AIRLINE_MASTER_DATA:"/flight/Master/masterdata",
    UPDATE_FLIGHT:"/flight/Airline/reshedule",
    UPDATE_AIRLINR:"/flight/Airline/block",
    SEARCH:"/flight/Airline/search",


    BOOK_TICKET:"/ticket/Ticket/bookticket",
    CANCEL_TICKET:"/ticket/Ticket/cancelticket?pnrno=",
    GET_MY_TICKETS:"/ticket/Ticket/getticket",
    GET_BY_PNR:"/ticket/Ticket/getticket/",
    GET_Discounts:"/ticket/Ticket/discount"
}