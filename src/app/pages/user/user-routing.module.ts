import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUserComponent} from "./list-user/list-user.component";
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";
import {ViewUserComponent} from "./view-user/view-user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  }, {
    path: 'list',
    component: ListUserComponent
  }, {
    path: 'add',
    component: AddEditUserComponent
  }, {
    path: 'edit/:id',
    component: AddEditUserComponent
  }, {
    path: 'view/:id',
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
