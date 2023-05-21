import { Injectable } from "@angular/core";
import { EventLoadStore } from "../event-load.store";
import { type EventLoadOneComponent } from "./event-load-one.component";

@Injectable({
  providedIn: "root",
})
export class EventLoadOneStore extends EventLoadStore<EventLoadOneComponent> {
  constructor() {
    super();
  }
  load() {
    return super._load(
      import("./event-load-one.component").then((x) => x.EventLoadOneComponent)
    );
  }
}
