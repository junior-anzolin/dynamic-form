import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormConfig } from 'projects/dynamic-forms/src/lib/dynamic-form-config.type';
import { DynamicFormsModule } from './../../../../projects/dynamic-forms/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherTypeInput } from './other-type.component';
import { TestTypeInput } from './test-type.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTypeInput,
    OtherTypeInput,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormsModule.forRoot({
      types: [
        {
          unique: {
            name: 'other-type',
            component: OtherTypeInput,
          }
        },
        {
          view: {
            name: 'test-type',
            component: TestTypeInput,
          },
          edit: {
            name: 'test-type',
            component: OtherTypeInput,
          }
        }
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
