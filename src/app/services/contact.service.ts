import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  public readonly base = '/api';

  constructor(private readonly http: HttpClient) {}

  // getContacts(): Observable<any> {
  //   // return this.http.get(ContactService.base + '/contacts');
  //   return this.http
  //     .get(this.base + '/contacts', { responseType: 'blob'})
  //     .pipe(map(res => {
  //       console.log('here');
  //       return {
  //         filename: 'filename.csv',
  //         data: res,
  //       };
  //     }));
  // }

  getContacts(): Observable<any> {
  // getContacts(): Observable<[contact]> {
    // return this.http.get<[contact]>(this.base + '/contacts');
    return this.http.get(`${this.base}/contacts`);
  }

  updateContacts(contactBlob: string): Observable<any> {
    return this.http.post(this.base + '/contacts', contactBlob);
  }

  uploadContacts(body: object): Observable<any> {
  //   console.log(body);
    return this.http.post(this.base + '/contacts/upload', body);
  }
}
