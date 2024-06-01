import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../bookservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  totalBooks: number | undefined;
  totalMembers: number | undefined;
  booksIssued: number | undefined;
  booksOverdue: number | undefined;
  recentActivities: string[] | undefined;
  formGroup!: FormGroup;
  books:any;

constructor(private bookservice:BookserviceService){}
  loadDashboardData() {
    this.recentActivities = [
      'Book "Angular Basics" issued to John Doe',
      'New member "Jane Smith" registered',
      'Book "Learning TypeScript" returned by Alice Johnson',
      'Book "React for Beginners" added to the library'
    ];
  }


  registerNewMember() {
    console.log('Navigate to Register New Member form');
    // Add navigation logic here
  }

  issueBook() {
    console.log('Navigate to Issue Book form');
    // Add navigation logic here
  }

  ngOnInit() {
  
  this.getAll();
  this.formGroup = new FormGroup({
    books: new FormControl(this.books),
    members:new FormControl(45)
});
  }
  getAll(){
    this.bookservice.getBooks().subscribe(res=>{
      this.books=res.length;
      console.log(this.books,"length");
      
    })
  }
}