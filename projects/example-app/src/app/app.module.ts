import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormsTypeInputModule } from 'projects/dynamic-forms/src/lib/themes/types/material/dynamic-forms-type-input';
import { DynamicFormsTypeStepperModule } from 'projects/dynamic-forms/src/lib/themes/types/material/dynamic-forms-type-stepper';
import { DynamicFormsModule } from './../../../../projects/dynamic-forms/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherTypeInput } from './other-type.component';
import { TestTypeInput } from './test-type.component';

@NgModule({
  declarations: [AppComponent, TestTypeInput, OtherTypeInput],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormsTypeInputModule,
    DynamicFormsTypeStepperModule,
    DynamicFormsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
