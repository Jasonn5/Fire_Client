import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Release } from 'src/app/models/release';
import { ReleaseService } from '../../services/release.service';
import { EditReleaseComponent } from '../edit-release/edit-release.component';

@Component({
  selector: 'app-view-releases',
  templateUrl: './view-releases.component.html',
  styleUrls: ['./view-releases.component.scss']
})
export class ViewReleasesComponent implements OnInit {
  public modalOptions!: NgbModalOptions;
  public releases: Release[] = [];
  public isAdmin = false;

  constructor(
    private modalService: NgbModal,
    private releaseService: ReleaseService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.getRoles().includes('Admin');
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'md',
      centered: true
    }

    this.releaseService.list().subscribe(releases => {
      this.releases = releases;
    });
  }

  createRelease() {
    const modalRef = this.modalService.open(EditReleaseComponent, this.modalOptions);

  }
}