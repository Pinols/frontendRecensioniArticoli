import {Recensione} from "./recensione";

export class Articolo{
  public nome:string;
  public prezzo:number;
  public recensioni:Recensione[] = [];
}
