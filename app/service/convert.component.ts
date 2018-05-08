import { Component, OnInit } from '@angular/core';
import { ConvertService} from './convert.service'

@Component({
    selector: 'st-convert',
    templateUrl: './convert.component.html'
    // providers : []
})
export class ConvertComponent {
    result : number = 0;

    // Depedency Injection 
    constructor(private converter : ConvertService) { 
    }

    

    convertToUsd(amount : number) {
        // call method in service to convert 
        this.result =  this.converter.inrToUsd(amount)
    }
}
