import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  template: `
    <form (ngSubmit)="saveEvent()">
      <label>Event Name:</label>
      <input type="text" [(ngModel)]="newEvent.name" name="name">
      <br>
      <label>Event Date:</label>
      <input type="text" [(ngModel)]="newEvent.date" name="date">
      <br>
      <label>Event Location:</label>
      <input type="text" [(ngModel)]="newEvent.location.address" name="address">
      <br>
      <button type="submit">Save</button>
    </form>
  `
})
export class EventFormComponent {
  newEvent: Event = new Event();

  constructor(private eventService: EventService, private router: Router) {}

  saveEvent() {
    this.eventService.saveEvent(this.newEvent);
    this.router.navigate(['/events']);
  }
}
