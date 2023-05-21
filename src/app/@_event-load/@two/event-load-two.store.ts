import { Injectable } from "@angular/core";
import { EventLoadStore } from "../event-load.store";
import { type EventLoadTwoComponent } from "./event-load-two.component";

@Injectable({
  providedIn: "root",
})
export class EventLoadTwoStore extends EventLoadStore<EventLoadTwoComponent> {
  constructor() {
    super();
  }
  load() {
    return super._load(
      import("./event-load-two.component").then((x) => x.EventLoadTwoComponent)
    );
  }
}
