import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './_common/header/header.component';
import { NavComponent } from './_common/nav/nav.component';
import { ModalComponent } from './_common/modal/modal.component';

import { UserDataService } from './_data/services/user-data.service';
import { FormatDatePipe } from './_pipes/format-date.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FormatDatePipe,
    ModalComponent
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
