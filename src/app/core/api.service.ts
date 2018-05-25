import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ENV } from './env.config';

@Injectable()
export class ApiService {

  constructor(
  	private http: HttpClient,
  	private auth: AuthService
  ) { }

  private get _authHeader(): string {
  	return `Bearer ${localStorage.getItem('access_token')}`;
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
  	const errorMsg = err.message || 'Error: Unable to complete request.';
  	if (err.message && err.message.indexOf('No JWT present') > -1) {
  		this.auth.login();
  	}
  	return Observable.throw(errorMsg);
  }
}
