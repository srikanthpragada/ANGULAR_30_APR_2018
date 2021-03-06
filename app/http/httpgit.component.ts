import { Component } from '@angular/core';
import { GitUser } from './GitUser';
import { GitRepo } from './GitRepo';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/finally';


@Component(
    {
        selector: 'git-user',
        templateUrl: './httpgit.component.html'
    })
export class HttpGitComponent {
    public user: GitUser;
    public repos : GitRepo[];
    private url: string = "https://api.github.com/users/";
    public isLoading: boolean = false;
    public message: string = null;

    constructor(private http: HttpClient) {
    }

    getDetails(username: string): void {
        this.user = null;
        this.repos = null; 
        this.isLoading = true;   
        this.message = null;

        this.http.get<GitUser>(this.url + username)
            .finally( () => this.isLoading = false)
            .subscribe(resp => this.user =  resp,
                       error => this.message = "Sorry! User Not Found!"
                    );
    }

    getRepos(username: string): void {
        this.message = null;
        this.isLoading = true; 
        this.repos = null; 
        this.user = null; 
        this.http.get<GitRepo[]>(this.url + username + "/repos")
            .finally( () => this.isLoading = false)
            .subscribe(resp => this.repos =  resp,
                       error => this.message = "Sorry! User Not Found!");

    }

     
}
