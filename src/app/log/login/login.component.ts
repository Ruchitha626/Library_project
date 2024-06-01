import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent {

  value: string | undefined;
  signupobj:SignUpModel = new SignUpModel();
  loginobj:LogInModel =new LogInModel(); 
  constructor(private router:Router,private messageService:MessageService ){}
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'successfully regisered' });
  }
  show1() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not found' });
  }
  show2(){
      this.messageService.add({ severity: 'success', summary: 'success', detail: 'successfully login' });
  }
  
  onRegister(form:any){
    
    const localusers=localStorage.getItem('signin-users');
    if(localusers!=null){
      const users = JSON.parse(localusers);
      users.push(this.signupobj);
      localStorage.setItem('signin-users',JSON.stringify(users))
     } else{
        const users = [];
        users.push(this.signupobj)
        localStorage.setItem('signin-users',JSON.stringify(users))
  
      }
      form.resetForm();
this.show();
  }
  onLogIn(){
  

     const localusers =localStorage.getItem('signin-users');
     if(localusers!=null){
       const users =JSON.parse(localusers);
       const  isUserPresent = users.find((user:SignUpModel)=>user.email == this.loginobj.email  && user.password == this.loginobj.password);
        
       if(isUserPresent != undefined){
        localStorage.setItem('loggeduser',JSON.stringify(isUserPresent));
         localStorage.setItem('username',JSON.stringify(isUserPresent.name));
         this.show2();
          this.router.navigateByUrl('/dash');
        console.log(isUserPresent.name,"name");

       }else{
        this.show1();
       }

     } 
   }
  
   ngOnInit(): void {
   
  }

}


  export class SignUpModel{
    name:string;
    email:string;
    password:string;
    constructor(){
      this.email="";
      this.name="";
      this.password=""
    }
  }
  export class LogInModel{
    name:string;
    email:string;
    password:string;
    constructor(){
      this.email="";
      this.name="";
      this.password=""
    }


  }

  
  
  
