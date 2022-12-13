import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postulation } from 'src/app/models/postulation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostulationDatastoreService {

  readonly ROOT_URL = `${environment.BACK_END_HOST}postulation`;

  constructor(private http: HttpClient) { }

  add(postulation: Postulation) {
    return this.http.post<Postulation>(this.ROOT_URL, postulation);
  }
}
