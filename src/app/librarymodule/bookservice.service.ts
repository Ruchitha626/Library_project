import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private dataUrl = 'http://localhost:3000/books'; 
  private borrowedBooksUrl='http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.dataUrl}/${id}`);
  }
  delete(id:any){                
    return this.http.delete<any>(`http://localhost:3000/books/${id}`)
  }

  addBook(book: Book): Observable<any> {
    return this.http.post<any>(this.dataUrl, book);
  }

  borrowBook(data: any): Observable<any> {
    return this.http.post<any>(this.borrowedBooksUrl, data); // Use POST to add a new borrowed book
  }

  getBorrowedBooks(): Observable<any> {
    return this.http.get<any>(this.borrowedBooksUrl);
  }


}
