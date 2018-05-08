import { Component} from '@angular/core';

@Component({
    selector: 'st-first',
    template: `<h1>{{title}}</h1>
     <hr />
     <st-second></st-second>
     <hr/>
    `
})
export class FirstComponent  {
    title = "First Component"
}
