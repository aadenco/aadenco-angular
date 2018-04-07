import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NgbdDropdownBasic } from './dropdown-basic';
import { TopnavComponent } from './components/topnav/topnav.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdDropdownBasic,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
