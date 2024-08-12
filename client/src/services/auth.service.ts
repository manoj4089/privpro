// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
  

//   //todo: complete missing code..
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private isLoggedIn: boolean = false;

  constructor() { }

  saveToken(token: string): void {
    this.token = token;
    this.isLoggedIn = true;
    localStorage.setItem('token', token);
  }

  setRole(role: any): void {
    localStorage.setItem('role', role);
  }

  get getRole(): string | null {
    return localStorage.getItem('role');
  }

  get getLoginStatus(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.token = null;
    this.isLoggedIn = false;
  }
}
