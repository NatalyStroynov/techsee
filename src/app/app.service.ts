import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map,tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
};

export interface Tester {
  firstName :string,
  lastName  :string,
  country   :string,
  device    : string,
  bugs :any[]
}


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private testersUrl = "https://test-api.techsee.me/api/ex/";

  constructor(
    private http:HttpClient
  ) { }


  getAllTesters():Observable<Tester[]>{
    console.log("app servers getAllTesters");
    return this.http.get<Tester[]>(this.testersUrl+"all")
    .pipe(
      tap(data => console.log('fetched testers', data),
      catchError(this.handleError('getTesters', [])))
    );
   
  }

  getTester(testerName:string):Observable<Tester>{
    console.log("app servers getlTesters");
    return this.http.get<Tester>(this.testersUrl+testerName)
    .pipe(
      tap(data => console.log('fetched tester', testerName),
      catchError(this.handleError('getTester', [])))
    );
   
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a Testers Service message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`TestersService: ${message}`);
    console.log("testers service",message);
  }
}
