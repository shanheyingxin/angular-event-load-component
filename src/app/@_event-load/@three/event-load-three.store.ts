import { Injectable } from "@angular/core";
import { EventLoadStore } from "../event-load.store";
import { type EventLoadThreeComponent } from "./event-load-three.component";

@Injectable({
  providedIn: "root",
})
export class EventLoadThreeStore extends EventLoadStore<EventLoadThreeComponent> {
  constructor() {
    super();
  }
  load() {
    return super._load(
      import("./event-load-three.component").then(
        (x) => x.EventLoadThreeComponent
      )
    );
  }
}
