import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl('')
  })
  onSubmit() {
    // TODO: Use EventEmitter with form value
  }
  p(p: Event) {
    console.warn(this.profileForm.value);
    p.preventDefault();

  }
}
