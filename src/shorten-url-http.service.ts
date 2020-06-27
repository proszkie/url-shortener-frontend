import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Url } from './url'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShortenUrlHttpService {

  baseUrl = 'http://127.0.0.1:8080'
  shortenUrlEndpoint = '/v1/shorten'

  constructor(private http: HttpClient) { }

  shortenUrl(urlToShorten: string): Observable<Url>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    let urlDto: Url = {
      url: urlToShorten,
      path: ''
    }

    return this.http.post<Url>(this.baseUrl + this.shortenUrlEndpoint, urlDto, httpOptions);
  }
}
