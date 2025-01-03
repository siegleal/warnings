import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
