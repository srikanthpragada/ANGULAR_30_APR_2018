import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BindingsComponent } from './bindings.component';
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [
      CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
