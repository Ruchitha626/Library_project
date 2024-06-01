import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [MessageService]
})
export class BookDetailsComponent implements OnInit {
  bookId: any;
  book: any;
  displayDialog: boolean = false;
  numberOfDays: number = 0; // Ensure this is a number type

  constructor(
    private route: ActivatedRoute,
    private bookService: BookserviceService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Book ID:', id); // Debugging line to check the ID
    if (id) {
      this.bookService.getBookById(id).subscribe(
        data => this.book = data,
        error => console.error('Error fetching book details:', error)
      );
    } else {
      console.error('No ID found in the route parameters.');
    }
  }

  borrowbook() {
    this.displayDialog = true;
  }

  cancel() {
    this.displayDialog = false;
  }

  datatransfer(id: any, days: number) {
    console.log("save");
    if (id) {
      this.bookService.getBookById(id).subscribe(
        oldData => {
          const updatedData = { ...oldData, numberOfDays: days };
          this.bookService.borrowBook(updatedData).subscribe(
            response => {
              console.log('Successfully transferred book:', response, this.numberOfDays);
              this.bookService.delete(id).subscribe(
               res=>{
                console.log('Successfully deleted book:', res);

               } 
              )
              // Navigate to BorrowedComponent with the book ID and number of days
              // this.router.navigate(['/borrowed'], { queryParams: { id: id, days: days } });
            },
            error => {
              console.error('Error transferring book:', error);
            }
          );
        },
        error => {
          console.error('Error fetching data by ID:', error);
        }
      );
    } else {
      console.error('Invalid ID provided.');
    }
  }

  save() {
    if (this.book && this.book.id) {
      this.datatransfer(this.book.id, this.numberOfDays); // Pass numberOfDays to datatransfer method
      this.show();
    }
    this.displayDialog = false;
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Borrowed Successfully' });
  }
}
