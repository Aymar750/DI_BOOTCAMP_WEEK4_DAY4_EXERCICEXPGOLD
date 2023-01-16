import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  template: `
    <a routerLink="/create-event">Create New Event</a>
    <div *ngFor="let event of events">
      {{event.name}} - {{event.date}} - {{event.location.address}}
    </div>
  `
})
export class EventListComponent {
  events: Event[];

  constructor(private eventService: EventService) {
    this.events = eventService.events;
  }
}
