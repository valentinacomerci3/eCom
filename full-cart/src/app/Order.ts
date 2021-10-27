import { Product } from "./Product";

export interface Order {
  total:number;
  ccname: string;
  cccvv: string;
  firstname: string;
  lastname: string;
  zip: string;
  country: string;
  state: string;
  email: string;
  address: string;
  ccnumber: string;
  ccexp: string;
  products:Product[];
}
