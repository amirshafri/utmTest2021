import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '@angular/material/ma';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIcon } from '@angular/material/icon';
// import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 


import { FormsModule } from '@angular/forms';
import { UtmFormComponent } from './utm-form/utm-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UtmFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
