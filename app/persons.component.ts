import { Component } from '@angular/core';
import { Person } from "./Person" 

@Component({
    selector: 'st-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent  {
    persons : Person []
    constructor() { 
        this.persons = []
    }

    addPerson(fullname : string , email : string, mobile : string, age : number) {
        var p = new Person(fullname, email, mobile, age)
        this.persons.push(p)
    }

    deletePerson(idx)
    {
       if (! confirm("Do you want to delete person?"))    
       return; 

       this.persons.splice(idx,1)
    }

    
}
