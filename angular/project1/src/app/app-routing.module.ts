import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component'
import {ContactusComponent} from './contactus/contactus.component'
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  { path: 'about', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  {path: '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
