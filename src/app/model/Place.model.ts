export interface  Place{
  title:string;
  city?:string;
  country?:string;
  timestimp?:number;
  coordinates?:{
    longitude:number;
    latitude:number;
  }
  photos?:string[];
}
