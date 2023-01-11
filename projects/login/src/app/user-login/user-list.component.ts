import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'projects/login/services/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  userData: any;


  constructor (public loginService:LoginService ) { }

  ngOnInit(): void {
    this.getAllUserDetails();
  }

  getAllUserDetails(){
    
    this.loginService.loginUser().subscribe(res =>{
        this.userData = res;
    })
 }
  

}
