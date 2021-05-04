import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { Router } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rounter:Router) { }

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser')

    if(val !=null && val == 'true'){
      this.rounter.navigate(['/booking']);
    }
  }

  onSubmit(loginForm:NgForm):void{

    let userName = loginForm.value.username;
    let password = loginForm.value.password;

    // call API/service to validate the user from backend

    if(userName == 'emin' && password =='9876'){
      localStorage.setItem('isValidUser',"true");
      //sessionStorage.setItem('isValidUser',"true");
        // redirect to home page
        this.rounter.navigate(['/booking'])
    }else{
      localStorage.setItem('isValidUser',"false");
      alert('username or password is invalid');
    }

  }

}
