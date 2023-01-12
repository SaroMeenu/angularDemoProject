import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'projects/login/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  userData: any;

  postDetails:any

  constructor (public loginService:LoginService ) { }

  ngOnInit(): void {
    this.getAllUserDetails();
    
  }

  getAllUserDetails(){
    
    forkJoin({
        requestOne: this.loginService.loginUser(),
        requestTwo: this.loginService.postsList(),
        
      }).subscribe(({requestOne, requestTwo}) => {
        this.userData  = requestOne;
        console.log(requestTwo);
        this.loginService.setUserPostList(requestTwo)

      });
     
   
 }

 
  

}
