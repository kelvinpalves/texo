import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment';

@Injectable()
export class DashboardService {

  private readonly PATH_MOVIES = "?winner=true&year=";
  private readonly PATH_MULTIPLE_WINNERS = "?projection=years-with-multiple-winners";
  private readonly PATH_PRODUCERS = "?projection=max-min-win-interval-for-producers";
  private readonly PATH_STUDIOS_WIN_COUNT = "?projection=studios-with-win-count";

  constructor(
    private http: HttpClient
  ) { }

  getYearsWithMultipleWinners(): Observable<any> {
    return this.http.get(env.urlBase + this.PATH_MULTIPLE_WINNERS);
  }

  getStudiosWithWinCount(): Observable<any> {
    return this.http.get(env.urlBase + this.PATH_STUDIOS_WIN_COUNT);
  }

  getMaxMinWinIntervalForProducers(): Observable<any> {
    return this.http.get(env.urlBase + this.PATH_PRODUCERS);
  }

  getMovies(year: number): Observable<any> {
    return this.http.get(env.urlBase + this.PATH_MOVIES + year);
  }
}
