import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Config } from './config';
import { Hero } from './hero';

import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  config: Config;

  heroesUrl = '232323';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  // getConfig() {
  //   return this.http.get(this.configUrl);
  // }

  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3), // 失败后再次调用三次
        catchError(this.handleError)    // 通过此方式调用错误处理函数
      );
  }

  addHero (hero: Hero): Observable<Hero> {                     // 发送一个post请求
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

  getTextFile(filename: string) {           // 获取文本
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => this.log(filename, data),
          error => this.logError(filename, error)
        )
      );
  }


  log(filename, data) {
    console.log('fileName', filename);
    console.log('data', data);
  }

  logError(filename, error) {
    console.log('fileName', filename);
    console.error('data', error);
  }

  private handleError(error: HttpErrorResponse) {          // 错误处理函数
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
