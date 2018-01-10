import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    NoopAnimationsModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppServerModule { }
