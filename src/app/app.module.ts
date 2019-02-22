import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import {
 MatCardModule,
 MatDialogModule,
 MatButtonModule
} from '@angular/material';


import { ErrordialogComponent } from './errordialog/errordialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrordialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [ErrordialogComponent]
})
export class AppModule { }
