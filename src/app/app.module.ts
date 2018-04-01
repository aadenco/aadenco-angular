import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NgbdDropdownBasic } from './dropdown-basic';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NewCmpComponent,
    NgbdDropdownBasic
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
