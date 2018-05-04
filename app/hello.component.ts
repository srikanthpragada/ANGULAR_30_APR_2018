import { Component } from '@angular/core';

@Component({
  selector: 'st-hello',
  template: '<h1> Welcome To {{ title }} </h1>'
})
export class HelloComponent {
  title = 'Angular 5 Demo';
}
