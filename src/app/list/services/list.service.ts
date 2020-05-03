import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment';
import { Pageable } from '../models';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  getMovies(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(
      env.urlBase 
      + '?page=' + pageNumber
      + '&size=' + pageSize);
  }
}
