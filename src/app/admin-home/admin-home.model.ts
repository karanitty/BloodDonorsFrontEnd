export class UserDonorRequestModel{
    constructor(
        public name: String,
        public email:String,
        public address: String,
        public district: String,
        public blood:String,
        public phone:Number
    ){}
}