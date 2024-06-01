import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {
  borrowedbook: any;
  book: any[] = [];
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private bookservice: BookserviceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getBorrowedBooks();
  }

  getBorrowedBooks(): void {
    this.bookservice.getBorrowedBooks().pipe(
      catchError(error => {
        console.error('Error fetching borrowed books:', error);
        this.errorMessage = 'An error occurred while fetching borrowed books. Please try again later.';
        return of([]); // Return an empty array in case of error
      })
    ).subscribe(data => {
      this.book = data;
      this.cdr.detectChanges();
    });
  }
}
