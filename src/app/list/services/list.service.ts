import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment';
import { Pageable } from '../models';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  getUrl(pageNumber: number, pageSize: number, year: number, winner: boolean) {
    let url = env.urlBase + '?page=' + pageNumber + '&size=' + pageSize;
    if (year) url += '&year=' + year;
    if (winner) url += '&winner=' + winner;
    
    return url;
  }

  getMovies(pageNumber: number, pageSize: number, year: number, winner: boolean): Observable<any> {
    return this.http.get(this.getUrl(pageNumber, pageSize, year, winner));
  }

}
