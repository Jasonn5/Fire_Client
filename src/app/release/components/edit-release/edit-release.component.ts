import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Release } from 'src/app/models/release';
import { ReleaseService } from '../../services/release.service';

@Component({
  selector: 'app-edit-release',
  templateUrl: './edit-release.component.html',
  styleUrls: ['./edit-release.component.scss']
})
export class EditReleaseComponent implements OnInit {
  public title = "";
  public description = "";
  public releaseForm!: FormGroup;
  public faArrowRight = faArrowRight;
  public release: Release = new Release()

  constructor(public activeModal: NgbActiveModal,
    private releaseService: ReleaseService) { }

  ngOnInit(): void {
  }

  saveChanges() {
    this.releaseService.add(this.title, this.description, "").subscribe(() => {
      alert("Publicación creada exitosamente");
      this.activeModal.close(true)
    }, (error: any) => {
      alert(error.error.error.message)
    });
  }
}
