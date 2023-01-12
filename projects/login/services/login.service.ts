import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    
    headers:any;
    userPostList:any;
    constructor(private http: HttpClient) {
        
     }
     
    loginUser() {

        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url='https://gorest.co.in/public/v2/users';
       return this.http.get(url, { headers: header });
      }

      postsList() {
        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        
        // let url=`https://gorest.co.in/public/v2/users/${userId}/posts`;
        let url = `https://gorest.co.in/public/v2/posts`
       return this.http.get(url, { headers: header });
      }

    createPost(data: any, userId:any){
             let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url=`https://gorest.co.in/public/v2/users/${userId}/posts`;
        return this.http.post(url,data, { headers: header });
      }

      postComments(data: any){
        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url=`https://gorest.co.in/public/v2/comments`;
        return this.http.post(url,data, { headers: header });
      }

      deletePost(userId:any,id:any){

        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url=`https://gorest.co.in/public/v2/posts/${id}`;
        return this.http.delete(url , { headers: header });
      }

      getComments(id:any){

        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url=`https://gorest.co.in/public/v2/posts/${id}/comments`;
        return this.http.get(url , { headers: header });
      }

      setUserPostList(data:any){
          this.userPostList = data
      }

      getUserPostList(){
         return this.userPostList 
      }
      
      deleteComments(id:any){

        let header = new HttpHeaders().set(
            "Authorization",
            "Bearer cf57c82b14e5ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f"
          );
        let url=`https://gorest.co.in/public/v2/comments/${id}`;
        return this.http.delete(url , { headers: header });
      }
}