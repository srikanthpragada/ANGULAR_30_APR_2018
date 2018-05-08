import { Component, OnInit } from '@angular/core';
import { Course } from './Course'

@Component({
    selector: 'st-course-list',
    templateUrl: './courselist.component.html'
})
export class CourseListComponent implements OnInit {
    list : Course[];
    constructor() { 
        this.list = [new Course("Python Programming"), 
            new Course("Angular",15), new Course("Java SE 10")]
    }

    ngOnInit(): void { }

    deleteCourse(idx : number) {
         console.log("Deleting course : " + idx)
         this.list.splice(idx,1)
    }
}


