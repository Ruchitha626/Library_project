import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchQuery: string = '';
 

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      this.filterBooks();
      this.updateFilteredBooks(); 
    });
  }
  currentPage: number = 1; 
itemsPerPage: number = 10; 

updateFilteredBooks() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.filteredBooks = this.books.slice(startIndex, endIndex);
}

onPageChange(event: any) {
  this.currentPage = event.page + 1;
  this.updateFilteredBooks();
}

  filterBooks(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );

    
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filteredBooks = this.books; // Reset to show all books
  }


  uploadedImageUrl: string | ArrayBuffer | null = null;
  defaultImage = 'assets/default-profile.png'; 
  onSelect(event: any) {
    
    
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadedImageUrl = reader.result;
        console.log(this.uploadedImageUrl);
        
      };
    }
  }
}
