export class Token{
   
    constructor(
        public token:string,
        public refreshToken:string,
        public userRole:string
    ) {
        

    }
}