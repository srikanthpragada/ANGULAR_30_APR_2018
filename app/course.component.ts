import { Component } from '@angular/core';

@Component({
    selector: 'st-course',
    templateUrl: './course.component.html'
})
export class CourseComponent {
    title : string;
    duration : number;
    fee : number;
    topics : string [] 
    message : string;

    constructor() { 
        this.title = "Angular"
        this.duration = 15
        this.fee = 1500
        this.topics = [ "Data binding", "Forms","Http","Routing"]
    }

    addTopic(topic :string) {
        // Check whether topic is already present 
        this.topics.push(topic)
    }

    deleteTopicByIndex(index : number) {
           this.topics.splice(index,1)
    }

    deleteTopic(topic :string) {
        // find out index of the topic 
        
        this.message = ""
        for(var i = 0; i < this.topics.length ; i ++)
        {
            if ( topic == this.topics[i])
            {
                this.topics.splice(i,1)
                return; 
            }
        }
        // topic not found
        this.message = "Topic not found!"
    }

}
