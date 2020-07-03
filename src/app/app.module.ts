import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenUrlCardComponent } from './shorten-url-card/shorten-url-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedirectToDesiredSiteComponent } from './redirect-to-desired-site/redirect-to-desired-site.component';
import { AlertComponent } from './alert/alert.component'


@NgModule({
  declarations: [
    AppComponent,
    ShortenUrlCardComponent,
    RedirectToDesiredSiteComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
