import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Users } from "./users";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  public url = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url).pipe(catchError(this.handleErrors));
  }

  handleErrors(error: HttpErrorResponse) {
    return throwError(error);
  }
}
