import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private usernameSubject = new BehaviorSubject<string | null>(this.getUsernameFromLocalStorage());
  username$ = this.usernameSubject.asObservable();

  setUsername(username: string) {
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);
  }

  getUsername(): string | null {
    return this.usernameSubject.value;
  }

  private getUsernameFromLocalStorage(): string | null {
    return localStorage.getItem('username');
  }
  
}