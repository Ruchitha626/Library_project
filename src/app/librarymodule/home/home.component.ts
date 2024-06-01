import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { LibrarymoduleModule } from '../librarymodule.module';
import { BookserviceService } from '../bookservice.service';
import { UserserviceService } from '../userservice.service';
import { ImageserviceService } from '../imageservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  
  data:any
  menuVisible: boolean = false;
  loggeduser:any;
  image:any;
  
  constructor(private userService:UserserviceService,private imageService:ImageserviceService ){}

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  getFirstLetter(): string {
    return this.loggeduser ? this.loggeduser.charAt(0).toUpperCase() : '';
  }
  ngOnInit(): void {
    // this.data=localStorage.getItem("loggedusername");
    this.userService.username$.subscribe(username => {
      this.loggeduser = username;
    });
  }


}
