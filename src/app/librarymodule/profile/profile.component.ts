import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { UserserviceService } from '../userservice.service';
import { ImageserviceService } from '../imageservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef | any;
  loggeduser: string | any;
  image: string | ArrayBuffer | any;

  constructor(private imageService: ImageserviceService, private userService: UserserviceService) {}

  ngOnInit() {
   
    this.userService.username$.subscribe(username => {
      if (username !== null && username !== undefined) {
        this.loggeduser = username.replace(/"/g, '');
      } else {
        this.loggeduser = ''; // or any default value you prefer
      }
    });
    
    console.log(this.loggeduser);
    
    this.image = this.imageService.getImage() || 'assets/default-profile.png';
  }

  onSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        this.imageService.setImage(result);
        this.image = result;
      };
      reader.readAsDataURL(file);  
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  updateUsername(newUsername: string) {
    this.userService.setUsername(newUsername);
  }
}