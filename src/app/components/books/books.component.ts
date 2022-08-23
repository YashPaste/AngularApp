import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  // selectedBook?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  // onSelect(book: Book): void {
  //   this.selectedBook = book;
  // }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }
}
