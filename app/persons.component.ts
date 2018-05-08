import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Person } from "./Person" 

@Component({
    selector: 'st-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
    persons : Person []
    // Refer to HTML element with template reference variable - fullname 
    @ViewChild('fullname') fullname : ElementRef
    constructor() { 
        this.persons = []
    }

    ngOnInit () {
        // init 
    }

    addPerson(fullname : string , email : string, mobile : string, age : number, gender : string) {
        console.log(gender)
        var p = new Person(fullname, email, mobile, age)
        this.persons.push(p)
        this.fullname.nativeElement.value = ""
    }

    deletePerson(idx)
    {
       if (! confirm("Do you want to delete person?"))    
       return; 

       this.persons.splice(idx,1)
    }

    
}
