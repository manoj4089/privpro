import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName=environment.apiUrl;
  //todo: complete missing code..
  constructor(private http: HttpClient) {}
  
  allocateResources(eventId: number, resourceId: number, details: any): Observable<any> {
    const url = `api/planner/allocate-resources?eventId=${eventId}&resourceId=${resourceId}`;
    return this.http.post(url, details);
  }
  GetAllResources(): Observable<any> {
    const url = 'api/planner/resources';
    return this.http.get(url);
  }
  

}
