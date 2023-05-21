import { Injectable } from "@angular/core";
import { EventLoadStore } from "../event-load.store";
import { type EventLoadFourComponent } from "./event-load-four.component";

@Injectable({
  providedIn: "root",
})
export class EventLoadFourStore extends EventLoadStore<EventLoadFourComponent> {
  constructor() {
    super();
  }
  load() {
    return super._load(
      import("./event-load-four.component").then(
        (x) => x.EventLoadFourComponent
      )
    );
  }
}
