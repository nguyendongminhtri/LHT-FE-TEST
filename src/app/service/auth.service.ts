import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SignInForm} from "../model/SignInForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API_LOCAL
  private API_SIGNUP = environment.API_LOCAL+'signup';
  private API_SIGNIN = environment.API_LOCAL+'signin';
  //API SERVER
  // private API_SIGNIN = environment.API_SERVER+'signin';

  constructor(private http: HttpClient) { }
  signUp (signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUp);
  }
  signIn (signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }
   public data: boolean;

  setOption(data: boolean) {
    this.data = data;
    console.log('data = ',data)
  }

  getOption() {
    return this.data;
  }
}
