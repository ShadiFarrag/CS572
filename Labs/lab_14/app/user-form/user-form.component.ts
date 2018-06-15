import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import{HttpClient} from '@angular/common/http';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UsersServService } from '../users-serv.service';

import{Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  /*template: `
    <p>
      user-form works!
    </p>
  `,*/
  templateUrl: './user-form.component.html',
  styles: []
})
export class UserFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private serv:UsersServService, private router: Router) {
    console.log('Hey I am user Component Constructor!');

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'user': ['', [Validators.required]],
        'email': ['', [Validators.required]],
        'post': ['', [Validators.required, Validators.minLength(10)]]
      })
    });

    /*this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );*/

   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm.value.userData);
    this.router.navigateByUrl('thankyou');
  }

  onGetUserData(){

    this.serv.getUserData()
      .subscribe(result => {
        
        console.log(result);

        this.serv.getPostData()
        .subscribe(res => 
        {
          let postData = "";
          postData = res[0]['body'];
          console.log('Posts Data:');
          console.log(postData);
          this.myForm.setValue({userData:{user: result['name'], email: result['email'], post: postData}});
        });

      });


      
      // this.myForm.controls['userData'].setValue({user:'Shadi', email:'ss@ss.com', post:''});

  }

}
