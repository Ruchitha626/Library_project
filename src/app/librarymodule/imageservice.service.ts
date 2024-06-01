import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  private imageSubject = new BehaviorSubject<string | ArrayBuffer | null>(this.getImageFromLocalStorage());
  image$ = this.imageSubject.asObservable();

  setImage(image: string | ArrayBuffer | null) {
    localStorage.setItem('loggeduser', image as string);
    this.imageSubject.next(image);
  }

  getImage(): string | ArrayBuffer | null {
    return this.imageSubject.value;
  }

  private getImageFromLocalStorage(): string | ArrayBuffer | null {
    return localStorage.getItem('loggeduser');
  }

}