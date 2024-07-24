export interface IUser {
    id: Number;
    name: String;
    email: String;
    website: String;
    username: String;
    phone: Number;
    address : {
        geo:{
            lng : Number;
            lat : Number;
        }
    }
}