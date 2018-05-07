import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BindingsComponent } from './bindings.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { ConvertService } from './service/convert.service';
import { ConvertComponent } from './service/convert.component';


@NgModule({
  declarations: [
      ConvertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConvertService],
  bootstrap: [ConvertComponent]
})
export class AppModule { }
