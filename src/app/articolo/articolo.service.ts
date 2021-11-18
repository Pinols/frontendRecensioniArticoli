import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Articolo} from "../models/articolo";

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {

  constructor(private httpClient:HttpClient) { }

  getArticolo() {
    return this.httpClient.get<Articolo>(`http://localhost:8080/api/articoli/dummy`);
  }

}
