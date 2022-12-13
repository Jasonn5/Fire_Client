import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowCircleRight, faArrowRight, faLongArrowAltRight, faPaperclip, faPaperPlane, faPlaneDeparture, faPlaneSlash } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
import { PostulationService } from '../../services/postulation.service';

@Component({
  selector: 'app-add-postulation',
  templateUrl: './add-postulation.component.html',
  styleUrls: ['./add-postulation.component.scss']
})
export class AddPostulationComponent implements OnInit {
  public name = "";
  public reason = "";
  public postulationForm!: FormGroup;
  faArrowRight = faArrowRight;

  constructor(
    private formBuilder: FormBuilder,
    private postulationService: PostulationService
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.postulationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(7), Validators.pattern(/^[0-9]+$/)]],
      reason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  addPostulation() {
    var postulation = this.postulationForm.value;
    this.postulationService.addPostulation(postulation).subscribe(() => {
      this.sendPostulation();
      this.postulationForm.reset();
    });
  }

  sendPostulation() {
    var message = `Muy buenas quisiera postularme al grupo`;
    message += `%0a%0a*GEOS mi nombre es:*${this.postulationForm.value.name}`;
    message += `%0a%0a*Motivo:* ${this.postulationForm.value.reason}`;
    message += `%0a%0a*Numero de Contacto:* ${this.postulationForm.value.phoneNumber}`;
    window.open(`https://api.whatsapp.com/send?phone=${60797901}&text=${message}`, '_system');
  }
}
