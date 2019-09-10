import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTicketComponent} from "./list-ticket/list-ticket.component";
import {AddEditTicketComponent} from "./add-edit-ticket/add-edit-ticket.component";
import {ViewTicketComponent} from "./view-ticket/view-ticket.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  }, {
    path: 'list',
    component: ListTicketComponent
  }, {
    path: 'add',
    component: AddEditTicketComponent
  }, {
    path: 'edit/:id',
    component: AddEditTicketComponent
  }, {
    path: 'view/:id',
    component: ViewTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {
}
