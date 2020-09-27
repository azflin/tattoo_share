import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Tattoo } from "./tattoo";

@Injectable({
  providedIn: 'root'
})
export class TattooService {

  private tattoosUrl = 'api/tattoos';

  constructor(
    private http: HttpClient
  ) { }

  getTattoos() { }

  getTattoo(id: number): Observable<Tattoo> {
    return this.http.get<Tattoo>(`${this.tattoosUrl}/${id}`);
  }
}
