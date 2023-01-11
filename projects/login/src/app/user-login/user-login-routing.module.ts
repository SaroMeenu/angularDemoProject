import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserLoginComponent } from './user-login.component';
import { UserPostComponent } from './user-post.component';

const routes: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'user-list', component: UserListComponent},
    { path: 'user-post', component: UserPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoginRoutingModule { }
