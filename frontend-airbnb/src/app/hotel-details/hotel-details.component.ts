import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {gql, Apollo} from 'apollo-angular';
import { Hotels } from '../models/types';

const Get_HotelDetails = gql `
query{
  hotel{
    hotel_id
    hotel_name
     street
     city
     postal_code
     price
     email
  }
}`;


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelDetailsComponent implements OnInit {
  hotelDetail: Hotels[] = [];
  loading = true;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: Get_HotelDetails
    }).valueChanges.subscribe(({data, loading}) =>{
      console.log(loading);
      this.hotelDetail = data.hotel
    })
  }

}
