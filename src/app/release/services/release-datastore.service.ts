import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Release } from 'src/app/models/release';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReleaseDatastoreService {
  readonly ROOT_URL = `${environment.BACK_END_HOST}release`;

  constructor(private http: HttpClient) { }

  add(release: Release) {
    return this.http.post<Release>(this.ROOT_URL, release);
  }

  list() {
    return this.http.get<Release[]>(this.ROOT_URL);
  }
}
