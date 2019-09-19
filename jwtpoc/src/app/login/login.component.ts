
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataRequestService } from '../services/data-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: any;
  password: any;
  constructor(private formBuilder: FormBuilder, public dataRequestService: DataRequestService, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      this.dataRequestService.verifyLogin({email: this.email, password: this.password}).subscribe(res => {
        if(res.status) {
          alert(res.message);
          localStorage.setItem('access_token', res.data);
          this.router.navigate(['home']);
        } else {
          alert(res.message);
        }
      });
    }
  }
}