import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EcNavbarComponent } from './ec-navbar/ec-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    EcNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
