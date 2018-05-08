import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './Course'

@Component({
    selector: 'st-course-details',
    templateUrl: './coursedetails.component.html'
})
export class CourseDetailsComponent implements OnInit {
    @Input() course : Course;
    @Input() index : number;
    // Declare event 
    @Output() deleteCourse = new EventEmitter<number>();

    constructor() { 
    }

    ngOnInit(): void { }

    delete() {
        // raise event with title as parameter 
        this.deleteCourse.emit(this.index) 
    }
}
