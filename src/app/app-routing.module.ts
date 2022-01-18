import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { FavouriteComponent } from './favourites/favourites.component';
import { RegComponent } from './reg/reg.component';
import { AppComponent } from './app.component';
import { RecommendationsComponent } from './Recommendations/Recommendations.component';



const routes: Routes =[
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'reg', component:RegComponent},
  {path: 'fav', component:FavouriteComponent},
  {path:'recommendations', component:RecommendationsComponent},



]


@NgModule(
  {
   // declarations:[SignInComponent],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }

export const routingComponents= [HomeComponent,LoginComponent,FavouriteComponent,RegComponent,]

