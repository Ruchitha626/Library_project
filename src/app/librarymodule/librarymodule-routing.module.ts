import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoverComponent } from './discover/discover.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';

const routes: Routes = [
  { 
    path: 'dash',
    component: DashboardComponent
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'discover',
    component: DiscoverComponent
  },
  { 
    path: 'borrow',
    component: BorrowedBooksComponent
  },
  { 
    path: 'books/:id',
    component: BookDetailsComponent
  },
  { 
    path: 'profile',
    component: ProfileComponent
  },
  { 
    path: 'all-books',
    component: AllBooksComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarymoduleRoutingModule { }
