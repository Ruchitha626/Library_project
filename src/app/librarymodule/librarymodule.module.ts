import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoverComponent } from './discover/discover.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LibrarymoduleRoutingModule } from './librarymodule-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ProfileComponent } from './profile/profile.component';
import { ImageModule } from 'primeng/image';
import { AllBooksComponent } from './all-books/all-books.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { KnobModule } from 'primeng/knob';
import { FileUploadModule } from 'primeng/fileupload';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';
import { ReUseComponent } from './re-use/re-use.component';
@NgModule({
  declarations: [
    DashboardComponent,
    DiscoverComponent,
    BookDetailsComponent,
    HomeComponent,
    ProfileComponent,
    AllBooksComponent,
    BorrowedBooksComponent,
    ReUseComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    DialogModule,
    KnobModule,
    ReactiveFormsModule,
    PaginatorModule,
    ReactiveFormsModule,
    LibrarymoduleRoutingModule,
    HttpClientModule,
    RatingModule,
    ToastModule,
    ToolbarModule,
    RouterModule,
    SidebarModule,
    FormsModule,
    TableModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    ImageModule
  ],
  exports:[
    HomeComponent,ReUseComponent
  ]
})
export class LibrarymoduleModule { }
