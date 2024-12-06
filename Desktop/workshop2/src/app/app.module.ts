import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidencesComponent } from './residences/residences/residences.component';
import { ResidenceDetailsComponent } from './residences/residencedetails/residencedetails.component';
import { AddresidenceComponent } from './residences/addresidence/addresidence.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartmentsbyresidence/apartmentsbyresidence.component';
import { AddapartmentComponent } from './apartments/addapartment/addapartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddresidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddapartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
