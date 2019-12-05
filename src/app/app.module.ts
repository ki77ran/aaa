import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {BulkPipe} from './bulk.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

import { EmployeeTitlePipe } from './employee-title.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipesComponent,
    BulkPipe,
    EmployeelistComponent,
    EmployeeTitlePipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
