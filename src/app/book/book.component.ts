import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  newTitle: string = '';
  newAuthor: string = '';
  books: Book[]  = [];

  ngOnInit() {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if(this.newTitle.trim().length && this.newAuthor.trim().length){
      let newBook={
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor
      }

      this.books.push(newBook)
      this.newAuthor = "";
      this.newTitle ="";

      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books))

  }

}
