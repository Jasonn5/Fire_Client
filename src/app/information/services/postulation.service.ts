import { Injectable } from '@angular/core';
import { Postulation } from 'src/app/models/postulation';
import { PostulationDatastoreService } from './postulation-datastore.service';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  constructor(private postulationDatastoreService: PostulationDatastoreService) { }

  public addPostulation(postulation: any){
    var newPostulation = new Postulation();
    newPostulation.name = postulation.name;
    newPostulation.reason = postulation.reason;
    newPostulation.phoneNumber = postulation.phoneNumber;

    return this.postulationDatastoreService.add(postulation);
  }
}
