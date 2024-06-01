import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';
import * as XLSX from 'xlsx';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: FileUpload|undefined;

  imageBase64: any;
  books: any[] = [];
  did: any;
  value: number = 5;
  searchQuery: string = '';
  loading: boolean = true;
  filteredBooks: any[] = [];
  visible = false;
  booksForm: FormGroup;

  constructor(private bookservice: BookserviceService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.booksForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      value: [null,Validators.required],
    });
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.bookservice.getBooks().subscribe(data => {
      this.books = data;
      this.loading = false;
      this.filteredBooks = data;
    });
  }

  add() {
    this.visible = true;
  }

  filename = "Books-List.xlsx";

  ExportExcel() {
    let data = document.getElementById("table-data");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    XLSX.writeFile(wb, this.filename)
  }

 

  onSelect(event: any) {
    const file = event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageBase64 = reader.result;
      };
    }
  }

  Add() {
    if (this.booksForm.valid) {
        const newBook: Book = { ...this.booksForm.value, coverImage: this.imageBase64 };
        this.bookservice.addBook(newBook)
            .subscribe((response) => {
                console.log('Book added successfully:', response);
                this.booksForm.reset();
                this.imageBase64 = null;
                this.resetFileInput(); // Reset file input here after imageBase64 is cleared
                this.cdr.detectChanges(); // Trigger change detection
                console.log(this.imageBase64, "64");
                this.get();
            }, (error) => {
                console.error('Error adding book:', error);
            });
    }
    this.visible = false;
}

resetFileInput() {
    if (this.fileUpload) {
        this.fileUpload.clear(); // Clear the file input
    }
}


  clear(table: Table) {
    table.clear();
    this.searchQuery = '';
  }
}
