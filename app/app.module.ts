import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WebBooks2Component } from './http/webbooks2.component';
import { AddBookComponent } from './http/add-book.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './service/books.service';
import { HttpGitComponent } from './http/httpgit.component';


@NgModule({
  declarations: [ HttpGitComponent  ],
  imports:      [ BrowserModule, HttpClientModule, FormsModule  ],
  providers:    [ BooksService],
  bootstrap:    [ HttpGitComponent]
})
export class AppModule { }
