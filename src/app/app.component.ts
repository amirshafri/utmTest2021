import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;
  title = 'utmTest';

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      title: formBuilder.control('initial value', Validators.required)
  });
  }
  
}
