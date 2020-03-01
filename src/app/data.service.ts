import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap, map, filter } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { IUsers } from "./users";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  private url = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<IUsers[]> {
    return this.http
      .get<IUsers[]>(this.url)
      .pipe(tap(data => console.log(data)));
  }

  getUser(id: number): Observable<IUsers> {
    return this.http.get<IUsers[]>(this.url).pipe(
      map((users: IUsers[]) => users.find(user => user.id === id)),
      catchError(this.handleErrors)
    );
  }

  handleErrors(error: HttpErrorResponse) {
    return throwError(error);
  }
}
