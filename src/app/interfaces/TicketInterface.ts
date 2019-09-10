import {UserInterface} from "./UserInterface";

export interface TicketInterface {
  subject: string;
  body: string;
  urgent: boolean;
  status: string;
  type: string;
  created: Date;
  owner: UserInterface;
  _id: string;
}
