import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      avatar: ['', Validators.required],
    });
  }

  submit(): void {
    console.log(this.form.valid ? 'Form Valid.' : 'Form Invalid.');
    console.log(this.form.controls['avatar']);
  }

}
