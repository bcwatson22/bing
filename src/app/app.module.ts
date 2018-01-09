import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgsRevealModule } from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './_common/header/header.component';
import { NavComponent } from './_common/nav/nav.component';
import { FooterComponent } from './_common/footer/footer.component';
import { ModalComponent } from './_common/modal/modal.component';
import { PortraitComponent } from './_common/modal/portrait/portrait.component';
import { ThumbnailComponent } from './_common/thumbnail/thumbnail.component';
import { AboutComponent } from './about/about.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { CommissionComponent } from './commission/commission.component';

import { UtilsService } from './_data/services/utils.service';
import { StaticContentService } from './_data/services/static-content.service';
import { PortraitService } from './_data/services/portrait.service';

import { FormatDatePipe } from './_pipes/format-date.pipe';
import { KeepHtmlPipe } from './_pipes/keep-html.pipe';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'bing'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    NgsRevealModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    ModalComponent,
    FooterComponent,
    PortraitComponent,
    AboutComponent,
    PaintingsComponent,
    DrawingsComponent,
    CommissionComponent,
    ThumbnailComponent,
    FormatDatePipe,
    KeepHtmlPipe
  ],
  providers: [
    UtilsService,
    StaticContentService,
    PortraitService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
