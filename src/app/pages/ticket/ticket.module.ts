import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import {AddEditTicketComponent} from "./add-edit-ticket/add-edit-ticket.component";
import {SharedModule} from "../../modules/shared/shared.module";
import {MaterialModule} from "../../modules/material/material.module";


@NgModule({
  declarations: [
    AddEditTicketComponent,
    ListTicketComponent,
    ViewTicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class TicketModule { }
