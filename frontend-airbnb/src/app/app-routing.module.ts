import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingComponent } from './booking/booking.component';
import { AuthGuard } from './guards/auth.guard';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'booking', component:BookingComponent, canActivate:[AuthGuard]},
  {path:'booking/booking_id',component:BookingDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'signup',component:SignupComponent},
  {path:'hotels', component:HotelComponent, canActivate:[AuthGuard]},
  {path:'hotels/hotel_name',component:HotelDetailsComponent},
  {path:'', redirectTo:'booking', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
