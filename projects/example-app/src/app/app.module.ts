import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormsModule } from './../../../../projects/dynamic-forms/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
