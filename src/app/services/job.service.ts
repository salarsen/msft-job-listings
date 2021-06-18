import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class JobService {
  public readonly base = '/api';

  constructor(private readonly http: HttpClient) {}

  getJobs(page: number): Observable<any> {
    return this.http.get(`${this.base}/jobs/${page}`);
  }

  getJob(jobId: string): Observable<any> {
    return this.http.get(`${this.base}/jobs/detail/${jobId}`);
  }

  filterJobs(form: object): Observable<any> {
    return this.http.post(`${this.base}/jobs`, form);
  }
}
