import {Component, OnInit, ViewChild} from '@angular/core';
import {TicketInterface} from "../../../interfaces/TicketInterface";
import {Observable} from "rxjs";
import {UserInterface} from "../../../interfaces/UserInterface";
import {UserService} from "../../../services/user.service";
import {TicketService} from "../../../services/ticket.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tm-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.css']
})
export class AddEditTicketComponent implements OnInit {

  public ticket: TicketInterface = {
    urgent: false,
    status: 'Offen'
  } as any;
  public users$: Observable<UserInterface[]>;

  constructor(
    userService: UserService,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {
    this.users$ = userService.getAll();

    if (this.route.snapshot.params.id) {
      this.ticketService.getById(this.route.snapshot.params.id).subscribe((ticket) => {
        this.ticket = ticket;
      });
    }
  }

  ngOnInit() {
  }

  safe() {

    if (this.ticket._id) {
      this.ticketService.update(this.ticket, this.ticket._id).subscribe((ticket) => {
        console.log('Ticket Updated');
        console.log(ticket);
      });
    } else {
      this.ticketService.save(this.ticket).subscribe((ticket) => {
        console.log(ticket);
      });
    }
  }
}
