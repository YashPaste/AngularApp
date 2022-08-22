import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  book: Book = {
    id: 1,
    author: 'HBR',
    title: 'HBR at 100',
  };

  constructor() {}

  ngOnInit(): void {}
}
