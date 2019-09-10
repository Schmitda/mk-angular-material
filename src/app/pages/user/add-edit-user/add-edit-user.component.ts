import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'tm-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {

    if (this.activeRoute.snapshot.params.id) {
      this.userService.getById(this.activeRoute.snapshot.params.id).subscribe((user) => {
        this.userForm.patchValue(user);
      });
    }

  }

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: [''],
    email: ['', Validators.email],
    password: ['', Validators.required],
    _id: []
  });


  ngOnInit() {
  }

  submit() {
    if (this.userForm.valid) {
      if (this.userForm.value._id) {
        this.userService.update(this.userForm.value, this.userForm.value._id).subscribe((user) => {
          console.log('User Updated');
          console.log(user);
          this.router.navigateByUrl('/user/list');
        });
      } else {
        this.userService.save(this.userForm.value).subscribe((user) => {
          console.log(user);
          this.router.navigateByUrl('/user/list');
        });
      }

    }
  }

  addUser() {
    console.log(this.userForm);
  }
}
