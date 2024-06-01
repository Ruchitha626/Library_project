import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './librarymodule/home/home.component';
import { LoginComponent } from './log/login/login.component';

const routes: Routes = [

  { 
    path: '',
     redirectTo: '/dash',
      pathMatch: 'full' 
  },
  { 
    path: '',
    component:HomeComponent,
    loadChildren:()=>import('./librarymodule/librarymodule.module').then((m:any)=>m.LibrarymoduleModule)
  },
  { 
    path: '',
    // component:LoginComponent,
    loadChildren:()=>import('./log/log.module').then((m:any)=>m.LogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
