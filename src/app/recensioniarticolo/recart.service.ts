import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Articolo} from "../models/articolo";

@Injectable({
  providedIn: 'root'
})
export class recartService {

  constructor(private httpClient:HttpClient) { }

  getArticoli() {
    return this.httpClient.get<Articolo[]>(`http://localhost:8080/api/articoli/getall`);
  }

}
