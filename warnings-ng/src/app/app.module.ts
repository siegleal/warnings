import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlertCardComponent } from './alert-card/alert-card.component';
import { CountCardComponent } from './count-card/count-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertCardComponent,
    CountCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
