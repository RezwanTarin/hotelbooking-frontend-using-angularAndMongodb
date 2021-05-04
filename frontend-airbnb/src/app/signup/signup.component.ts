import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { users } from '../models/types';

const Get_User = gql `
mutation ($email:addUser){
  save(addUser:email){
    email,
    username,
    password

  }
}
`

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {
    username:'',
    password:'',
    email:''
  }
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }
  newUser(){
    this.apollo.mutate({
      mutation:Get_User,
      variables:{
        email:{
          username: this.user.username,
          password: this.user.password,
          email: this.user.email
        }
      }
    }).subscribe(({data})=>{
      let customer = Object.assign([], this.newUser);
      //customer.unshift(data["Save"]);
      this.newUser = customer;
      //this.user.unshift(data["Save"]);
    })
  }

}
