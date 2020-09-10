import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IssueError} from '../../issueError';

@Injectable({
  providedIn: 'root'
})
export class GithubIssuesService {

  baseUrl = 'https://api.github.com/repos/angular/angular';

  constructor(public http: HttpClient) { }

  public handleHttpError(error: HttpErrorResponse): Observable<IssueError> {
    const dataError = new IssueError();
    dataError.message = error.statusText;
    return throwError(dataError);
  }

  getIssues(): Observable<any> {
    let url = this.baseUrl;
    const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.get<any>(url, {
      headers: header
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }
}
