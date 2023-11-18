import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { FilterComponent } from './component/filter/filter.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CardsComponent,
    PortfolioComponent,
    HeaderComponent,
    CardComponent,
    FilterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule, 
    MatExpansionModule, 
    MatListModule, 
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule, 
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }