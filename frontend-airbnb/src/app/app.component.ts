import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-airbnb';

  isvalid = false;

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser')

    if(val !=null && val == 'true'){
      this.isvalid = true
    }else{
      this.isvalid = false
    }
  }
}
