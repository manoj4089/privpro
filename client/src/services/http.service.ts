// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { environment } from '../environments/environment.development';
// // import { AuthService } from './auth.service';
 
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class HttpService {
 
// //   public serverName=environment.apiUrl;
// //   //todo: complete missing code..
// //   constructor(private http:HttpClient){}
 
 
// //   // login():Observable<any>{
// //   //   return this.http.
// //   // }
 
// //   getBookingDetails(eventId:any):Observable<any>{
// //     return this.http.get(`${this.serverName}/api/client/booking-details/{eventId}`);
// //   }
 
// //   GetEventdetails(eventId:any):Observable<any>{
// //     return this.http.get(`${this.serverName}/api/staff/event-details/{eventId}`)
// //   }
 
// //   GetAllevents():Observable<any>{
// //     return this.http.get(`${this.serverName}/api/planner/events`);
// //   }
 
// //   GetAllResources(){
// //     return this.http.get(`${this.serverName}/api/planner/resources`);
// //   }
 
// //   createEvent(event:any):Observable<any>{
// //     return this.http.post(`${this.serverName}/api/user/register`,event);
// //   }
 
// //   updateEvent(details:any, eventId:any):Observable<any>{
// //     return this.http.put(`${this.serverName}/api/staff/update-setup/{eventId}`,details,eventId);
// //   }
 
// //   addResource(resource:any):Observable<any>{
// //     return this.http.post(`${this.serverName}/api/planner/resource`,resource);
// //   }
 
// //   allocateResources(eventId: number, resourceId: number, details: any): Observable<any> {
// //     return this.http.post(`${this.serverName}/api/planner/allocate-resources?eventId=${eventId}&resourceId=${resourceId}`, details);
// //   }
 
// //   httpOptions = {
// //     headers: new HttpHeaders({
// //         'Content-Type': 'application/json',
// //         'Access-Control-Allow-Origin': '*'
// //     })
// //   };
 
// //   Login(user:any): Observable<any> {  //Partial<User>)
// //     return this.http.post(`${this.serverName}/api/user/login`,user,this.httpOptions);
// //   }
 
// //   registerUser(user: any): Observable<any> {
// //     return this.http.post(`${this.serverName}/api/user/register`, user);
// //   }
 
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// // import { environment } from '../../environments/environment';
// import { AuthService } from './auth.service';
// import { environment } from '../environments/environment.development';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {
//   private serverName = environment.apiUrl;

//   constructor(private http: HttpClient, private authService: AuthService) { }

//   getBookingDetails(eventId: any): Observable<any> {
//     const url = `${this.serverName}/api/client/booking-details/${eventId}`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.get(url, { headers }).pipe(catchError(this.handleError));
//   }

//   GetEventdetails(eventId: any): Observable<any> {
//     const url = `${this.serverName}/api/staff/event-details/${eventId}`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.get(url, { headers }).pipe(catchError(this.handleError));
//   }

//   GetAllevents(): Observable<any> {
//     const url = `${this.serverName}/api/planner/events`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.get(url, { headers }).pipe(catchError(this.handleError));
//   }

//   GetAllResources(): Observable<any> {
//     const url = `${this.serverName}/api/planner/resources`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.get(url, { headers }).pipe(catchError(this.handleError));
//   }

//   createEvent(details: any): Observable<any> {
//     const url = `${this.serverName}/api/planner/event`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.post(url, details, { headers }).pipe(catchError(this.handleError));
//   }

//   addResource(details: any): Observable<any> {
//     const url = `${this.serverName}/api/planner/resource`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.post(url, details, { headers }).pipe(catchError(this.handleError));
//   }

//   allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {
//     const url = `${this.serverName}/api/planner/allocateresources?eventId=${eventId}&resourceId=${resourceId}`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authService.getToken()}`
//     });
//     return this.http.post(url, details, { headers }).pipe(catchError(this.handleError));
//   }

//   Login(details: any): Observable<any> {
//     const url = `${this.serverName}/api/user/login`;
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(url, details, { headers }).pipe(catchError(this.handleError));
//   }

//   registerUser(details: any): Observable<any> {
//     const url = `${this.serverName}/api/user/register`;
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(url, details, { headers }).pipe(catchError(this.handleError));
//   }
//   updateEvent(details:any, eventId:any):Observable<any>{
//     const authToken = this.authService.getToken();
//     let headers = new HttpHeaders();
//     headers = headers.set('Content-Type', 'application/json');
//     headers = headers.set('Authorization', `Bearer ${authToken}`);
//     return this.http.put(`${this.serverName}/api/staff/update-setup/${eventId}`,details,eventId);
//   }

//   private handleError(error: any): Observable<never> {
//     console.error('An error occurred:', error);
//     return throwError(error);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getBookingDetails(eventId: any): Observable<any> {
    const url = `${this.serverName}/api/client/booking-details/${eventId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get(url, { headers });
  }
  getStatename():Observable<any> {
   
    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`)
    return this.http.get(this.serverName+`/api/state/`,{headers:headers});
  }
  

  GetEventdetails(eventId: any): Observable<any> {
    const url = `${this.serverName}/api/staff/event-details/${eventId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get(url, { headers });
  }

  GetAllevents(): Observable<any> {
    const url = `${this.serverName}/api/planner/events`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get(url, { headers });
  }

  GetAllResources(): Observable<any> {
    const url = `${this.serverName}/api/planner/resources`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get(url, { headers });
  }

  createEvent(details: any): Observable<any> {
    const url = `${this.serverName}/api/planner/event`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.post(url, details, { headers });
  }

  updateEvent(details: any, eventId: any): Observable<any> {
    const url = `${this.serverName}/api/staff/update-setup/${eventId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.put(url, details, { headers });
  }

  addResource(details: any): Observable<any> {
    const url = `${this.serverName}/api/planner/resource`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.post(url, details, { headers });
  }

  allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {
    const url = `${this.serverName}/api/planner/allocate-resources?eventId=${eventId}&resourceId=${resourceId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.post(url, details, { headers });
  }

  Login(details: any): Observable<any> {
    const url = `${this.serverName}/api/user/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, details, { headers });
  }

  registerUser(details: any): Observable<any> {
    const url = `${this.serverName}/api/user/register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, details, { headers });
  }
}

