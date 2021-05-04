import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  books: any[] = [];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query:gql `{book{hotel_id booking_date booking_start booking_end}}`
    })
    .subscribe(
      ({data,loading}) =>{
        this.books = data && data.book;
        this.loading = loading;
      }
    );
  }

}
