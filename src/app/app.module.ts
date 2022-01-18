import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { RecommendationsComponent } from "./Recommendations/Recommendations.component";



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatSidenavModule, MatListModule } from '@angular/material';

import { AppRoutingModule, routingComponents   } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { FavouriteComponent } from './favourites/favourites.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { FilterPipe } from './shared/filter.pipe';
import { DataService } from './data.service';
import { AuthGuardService } from './authguard.service';
import { LoginService } from './login.service';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    LoginComponent,
    FavouriteComponent,
    RecommendationsComponent,
    RegComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewsApiService,DataService,LoginService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
