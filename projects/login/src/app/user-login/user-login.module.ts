import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { UserPostComponent } from './user-post.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserListComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserLoginModule { }
