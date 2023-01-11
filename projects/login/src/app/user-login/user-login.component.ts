import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'projects/login/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: [
  ]
})
export class UserLoginComponent implements OnInit {

    public loginForm = new FormGroup({
      email : new FormControl(),
    });
    userData: any;
    constructor (public loginService:LoginService,private router:Router ) { }

    ngOnInit(): void {
        this.getAllUserDetails();
    }

    submitLoginForm(){

        for (let index = 0; index < this.userData.length; index++) {
            
            if(this.userData[index].email == this.loginForm.controls.email.value){
                this.router.navigate(['/login/user-list']);
                localStorage.setItem("userId", this.userData[index].id);
                localStorage.setItem("email", this.userData[index].email);
                localStorage.setItem("name", this.userData[index].name);
            }
            
        }    
    }

    getAllUserDetails(){
        
        this.loginService.loginUser().subscribe(res =>{
            this.userData = res;
        })
    }

    }
