import { Component, OnInit } from '@angular/core';
import {Articolo} from "../models/articolo";
import {ArticoloService} from "./articolo.service";

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  public articoli : Articolo[] = [];

  constructor(private articoloService:ArticoloService) { }

  ngOnInit(): void {
    this.articoloService.getArticolo().subscribe(
      response=>{
        this.articoli.push(response);
      },error => {
        console.log(error);
      }
    )
  }

}
