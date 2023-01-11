import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'projects/register/services/register.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styles: [
  ]
})
export class UserRegisterComponent implements OnInit {


    public registerForm = new FormGroup({
        name : new FormControl(),
        email : new FormControl(),
        gender : new FormControl(),
        status : new FormControl(),
        
      });
      statuses:any = 'active';
      closeResult: string = '';
  constructor(public registerService:RegisterService,private modalService: NgbModal,private router:Router ) { }

  ngOnInit(): void {
  }

  successModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  submitForm(content:any){

    var data = {

        name : this.registerForm.controls.name.value,
        email : this.registerForm.controls.email.value,
        gender : this.registerForm.controls.gender.value,
        status : this.statuses,
    }

    this.registerService.createUser(data).subscribe((res:any) =>{
      this.successModal(content);
    })

  }

  close(){
    this.modalService.dismissAll();
    this.router.navigate(['login']);
  }
}
