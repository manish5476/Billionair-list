import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs'; // Import RxJS operators

@Injectable({
  providedIn: 'root',
})
export class ApiservicesService {
  private apiUrl =
    'https://raw.githubusercontent.com/manishsingh2002/billionairjson/main/true.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response) => response), // Optional: Map response if needed
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(error); // Re-throw the error for handling in component
      })
    );
  }
}
