import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TattoosComponent, TattooModalComponent } from './tattoos/tattoos.component';
import { TattooDetailComponent } from './tattoo-detail/tattoo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TattoosComponent,
    TattooDetailComponent,
    TattooModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    TattooModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
