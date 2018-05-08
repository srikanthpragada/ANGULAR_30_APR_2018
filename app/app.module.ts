import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './forms/login.component';


@NgModule({
  declarations: [ LoginComponent  ],
  imports:      [ BrowserModule, FormsModule  ],
  providers:    [],
  bootstrap:    [LoginComponent]
})
export class AppModule { }
