import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewsService } from './Service/news.service';

import {MatCardModule} from '@angular/material/card';
import { NewsModule } from './Module/news/news.module';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [NewsService,NewsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
