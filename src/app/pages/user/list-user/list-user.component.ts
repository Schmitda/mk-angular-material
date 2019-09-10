import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../../interfaces/UserInterface";
import {UserService} from "../../../services/user.service";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

@Component({
  selector: 'tm-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public users$: Observable<UserInterface[]>;
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'edit', 'delete'];
  filterUserControl: FormControl = new FormControl();

  constructor(
    public userService: UserService
  ) {
    this.users$ = this.userService.getAll();
    this.filterUserControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((filter) => {
      this.users$ = this.userService.getAll().pipe(
        map(users => users.filter(user => (user.firstName + user.lastName).indexOf(filter) >= 0))
      );
    });
  }

  ngOnInit() {
  }

  deleteUser(_id: any) {
    this.userService.delete(_id).subscribe((user) => {
      this.users$ = this.userService.getAll();
    });
  }

}
