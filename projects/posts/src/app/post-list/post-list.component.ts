import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'projects/posts/services/posts.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: [
  ]
})
export class PostListComponent implements OnInit {
    postData: any;
    userId: any;
    title = 'appBootstrap';
    closeResult: string = '';
    public addPostForm = new FormGroup({
        title : new FormControl(),      
        description : new FormControl(),
            
    });

    public addCommentForm  = new FormGroup({
            name : new FormControl(),      
            email : new FormControl(),
            comments : new FormControl()
            
    });
    postId: any;
    userName: any;
    userEmail: any;
    modalContentMessage: any;
    commentData: any;
    commentId: any;
    constructor (public postsService: PostsService,private modalService: NgbModal) {
    this.userId= localStorage.getItem("userId");

   }

    ngOnInit(): void {

        this.getPostList();
        this.userName = localStorage.getItem('name');
        this.userEmail = localStorage.getItem('email');
    }


    open(content:any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } 

    openModal(content:any, postId:any ,type:any) {
        this.postId = postId;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.addCommentForm.patchValue({
        name: this.userName,
        email: this.userEmail
    })  

    if(type == 'view')
     {
         this.postsService.getComments(this.postId).subscribe(res =>{
             this.commentData = res;
         })
     }
  } 

    successModal(content:any) {
    
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    getPostList(){

        this.postsService.postsList().subscribe( res=>{
            this.postData = res;
        })

    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
        } else {
        return  `with: ${reason}`;
        }
    }

    openCommentModal(content:any, commentId:any){
        this.commentId = commentId;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }


    savePost(content:any){

        var data ={
            title: this.addPostForm.controls.title.value,
            body: this.addPostForm.controls.description.value,
            user_id: this.userId
        }
        this.postsService.createPost(data,this.userId).subscribe(res =>{

            this.modalService.dismissAll();
            this.modalContentMessage = 'Post added successfully'
            this.successModal(content);
            this.getPostList();
        })

    }

    postComments(content:any){

        var data = {
            name : this.userName,
            email : this.userEmail,
            body : this.addCommentForm.controls.comments.value,
            post_id : this.postId
        }
        this.postsService.postComments(data).subscribe(res =>{
            this.modalService.dismissAll();
            this.modalContentMessage = 'Comments added successfully'
            this.successModal(content);
            
        })
    }

    deletePost(content:any){

        this.postsService.deletePost(this.userId,this.postId).subscribe(res =>{
        this.modalService.dismissAll();
        this.modalContentMessage = 'Post deleted successfully'
        this.successModal(content);
        this.getPostList();
        })
    }

    deleteComment(content:any){

        this.postsService.deleteComments(this.commentId).subscribe(res =>{
            this.modalService.dismissAll();
            this.modalContentMessage = 'Comment deleted successfully'
            this.successModal(content);
            // this.getPostList();
            })
    }

}
