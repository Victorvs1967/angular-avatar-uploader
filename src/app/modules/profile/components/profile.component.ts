import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
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
    console.log(this.form.controls['avatar'].value);
    const user = this.form.value;
    user.avatar = 'avatar';
    this.userService.saveUserData(user);
    this.router.navigate(['files']);
  }

}
