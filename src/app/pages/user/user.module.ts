import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../modules/material/material.module";


@NgModule({
  declarations: [
    AddEditUserComponent,
    ViewUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UserModule { }
