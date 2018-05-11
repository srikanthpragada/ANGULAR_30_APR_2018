import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { BooksService } from '../service/books.service'
import { HttpClient } from '@angular/common/http'


@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooks2Component implements OnInit {
    books: WebBook[];
    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
        this.booksService.getAllBooks()
            .subscribe(result => this.books = result);
    }

    deleteBook(id: number, idx: number) {
        if (!confirm("Do you want to delete book?"))
            return;

        this.booksService.deleteBook(id)
            .subscribe(x => {
                alert("Deleted!");
                this.books.splice(idx, 1)
            },
            err => alert("Sorry! Couldn't Delete Book"))
    }
}
