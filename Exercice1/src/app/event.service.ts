import { Injectable } from '@angular/core';
import { Event } from '../event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [];

  saveEvent(event: Event) {
    this.events.push(event);
    console.log(`Event "${event.name}" saved!`);
  }
}
