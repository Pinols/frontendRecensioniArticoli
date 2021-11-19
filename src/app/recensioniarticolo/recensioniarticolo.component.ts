import {Component, OnInit  } from '@angular/core';
import {Articolo} from "../models/articolo";
import {recartService} from "./recart.service";

@Component({
  selector: 'app-recensioniarticolo',
  templateUrl: './recensioniarticolo.component.html',
  styleUrls: ['./recensioniarticolo.component.css']
})
export class RecensioniarticoloComponent implements OnInit {

  articoloScelto:Articolo = null;
  articoli:Articolo[]=[];
  constructor(public articoloService:recartService) { }

  ngOnInit(): void {
    this.articoloService.getArticoli().subscribe(
      response=>{
        this.articoli=response;
      },error => {
        console.log(error);
      }
    )
  }

  showRecensioni(art:Articolo){
    this.articoloScelto=art;
  }

}
