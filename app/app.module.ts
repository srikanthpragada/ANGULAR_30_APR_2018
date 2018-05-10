import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WebBooksComponent } from './http/webbooks.component';
import { AddBookComponent } from './http/add-book.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AddBookComponent, WebBooksComponent  ],
  imports:      [ BrowserModule, HttpClientModule, FormsModule  ],
  providers:    [],
  bootstrap:    [AddBookComponent, WebBooksComponent]
})
export class AppModule { }
