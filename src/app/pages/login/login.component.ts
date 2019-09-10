import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  userForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }

  submit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.login(this.userForm.value).subscribe((user) => {
        console.log(user);
        this.router.navigateByUrl(this.userService.redirectUrl || '/home');
      }, error => {
        console.log(error);
      });
    }
  }
}
