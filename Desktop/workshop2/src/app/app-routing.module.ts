import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences/residences.component';
import { ResidenceDetailsComponent } from './residences/residencedetails/residencedetails.component';
import { AddresidenceComponent } from './residences/addresidence/addresidence.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartmentsbyresidence/apartmentsbyresidence.component';
import { AddapartmentComponent } from './apartments/addapartment/addapartment.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence/:id', component: ResidenceDetailsComponent },
  { path: 'addresidence', component: AddresidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartmentsbyresidence/:residenceId', component: ApartmentsByResidenceComponent },
  { path: 'addApartment', component: AddapartmentComponent },
  { path: '**', component: NotfoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
