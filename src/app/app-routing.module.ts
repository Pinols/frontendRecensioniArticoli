import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticoloComponent} from "./articolo/articolo.component";
import {RecensioniarticoloComponent} from "./recensioniarticolo/recensioniarticolo.component";

const routes: Routes = [
  {path:'articolo',component: ArticoloComponent}
  ,{path:'articoli',component: RecensioniarticoloComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
