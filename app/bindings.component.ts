import { Component} from '@angular/core';
import {Person} from './Person'

@Component({
    selector: 'st-bindings',
    templateUrl: './bindings.component.html'
})
export class BindingsComponent {
    message = "Winners Never Quit. Quitters Never Win!"
    special = true 
    size = 15
    constructor() { }

    process(details) {
        console.log(details)
    }
    
    change() {
        this.message = Date().toString() 
    }
}
