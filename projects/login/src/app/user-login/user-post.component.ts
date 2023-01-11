import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'projects/login/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styles: [
  ]
})
export class UserPostComponent implements OnInit {

    
    constructor (public loginService:LoginService,private router:Router ) { }

    ngOnInit(): void {
 
    }

    }
