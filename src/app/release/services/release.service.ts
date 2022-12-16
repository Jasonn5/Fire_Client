import { Injectable } from '@angular/core';
import { Release } from 'src/app/models/release';
import { ReleaseDatastoreService } from './release-datastore.service';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  constructor(private releaseDatastoreService: ReleaseDatastoreService) { }

  add(title: string, description: string, imageUrl: string) {
    var newRelease = new Release();
    newRelease.title = title;
    newRelease.description = description;
    newRelease.image = imageUrl;

    return this.releaseDatastoreService.add(newRelease);
  }

  list(){
    return this.releaseDatastoreService.list();
  }
}
