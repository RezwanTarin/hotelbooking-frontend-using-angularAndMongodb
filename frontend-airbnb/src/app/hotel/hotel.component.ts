import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
//import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Hotels } from '../models/types';


const Get_Hotel = gql `
query{
  hotel{
    hotel_id,
    hotel_name,
    city,
    price

  }
}`;
const Get_SearchHotel = gql `
query($city:String){
  searchHotel(city:$city){
    hotel_id,
    hotel_name,
    city,
    price
  }
}`

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  Allhotel: Hotels[] = [];
  loading = true;
  error: any;
  searchHotel:string = '';
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo.watchQuery<any>({
      query: Get_Hotel
    }).valueChanges.subscribe(({data, loading}) =>{
      console.log(loading);
      this.Allhotel = data.hotel
    })

  }
  searchByHotel(){
    this.apollo.watchQuery<any>({
      query: Get_SearchHotel,
      variables:{
        "city":this.searchHotel
      }
    }).valueChanges.subscribe(({data, loading}) =>{
      console.log(loading);
      this.Allhotel = data.hotelByCity
    })
  }

}
