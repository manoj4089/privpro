// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpService } from '../../services/http.service';
// import { AuthService } from '../../services/auth.service';
// import { Observable, of } from 'rxjs';

// @Component({
//   selector: 'app-booking-details',
//   templateUrl: './booking-details.component.html',
//   styleUrls: ['./booking-details.component.scss']
// })
// export class BookingDetailsComponent implements OnInit
// {
  
//   formModel:any={status:null}; 
//   showError:boolean=false; 
//   errorMessage:any; 
//   eventObj:any=[]; 
//   assignModel: any={};
//   showMessage: any;
//   responseMessage: any; 
//   isUpdate: any=false;
//   constructor(private httpService:HttpService,private router:Router,private authService:AuthService,private formBuilder:FormBuilder)
//   {

//   }
//   ngOnInit(): void {
//     // Lifecycle hook that is called after the component is initialized.
//     // (Currently does nothing but reserved for future use).
//   }
  
//   searchEvent(): void {
//     // Fetches booking details based on eventID from formModel.
//     if (this.formModel.eventID) {
//       this.httpService.getBookingDetails(this.formModel.eventID).subscribe(
//         data => {
//           this.eventObj = data;
//         },
//         error => {
//           this.showError = true;
//           this.errorMessage = error;
//         }
//       );
//     }
//   }
// }
// //   ngOnInit(): void {
// //     this.router.params.subscribe(res=>
// //       {
// //         const id=res['id'];
// //         this.getBookingDetails(id);
// //       });
// //   }
// //   getBookingDetails(id:any)
// //   {
// //     this.bookingDetails$=this.http.getBookingDetails(id);
// //   }

// // }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  filteredBooking$: Observable<any> = of([]);
  booking$: Observable<any> = of([]);
  formModel: any = {status: null};
  showError: boolean = false;
  errorMessage: any;
  eventObj: any = [];
  assignModel: any = {};
  showMessage: any;
  responseMessage: any;
  isUpdate: any = false;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.booking$ = this.httpService.getBookingDetails(this.formModel.eventID);
    this.filteredBooking$ = this.booking$;
    if (this.filteredBooking$) {
      this.filteredBooking$.pipe(toArray());
      let bookingArray;
      this.filteredBooking$.subscribe(booking => {
        bookingArray = booking;
        if (bookingArray) {
          const Array = JSON.stringify(bookingArray);
          localStorage.setItem('BookingData', Array);
        }
      });
    }
  }

  searchBooking(event: any) {
    const searchTerm = event.target.value.trim();
    if (!searchTerm) {
      this.filteredBooking$ = this.booking$;
      return;
    }
    this.filteredBooking$ = this.booking$.pipe(
      map((events) => {
        return events.filter((event: { eventID: { toString: () => string | any[]; }; }) => event.eventID.toString().includes(searchTerm));
      })
    );
  }
}

