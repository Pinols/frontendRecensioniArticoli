import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticoloComponent} from "./articolo/articolo.component";

const routes: Routes = [
  {path:'articolo',component: ArticoloComponent}
  ,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
