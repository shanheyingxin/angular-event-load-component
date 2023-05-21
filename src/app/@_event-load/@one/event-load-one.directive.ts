import { Directive, ViewContainerRef } from "@angular/core";
import { EventLoadDirective } from "../event-load.directive";
import { EventLoadOneComponent } from "./event-load-one.component";

@Directive({
  selector: "event-load-one",
})
export class EventLoadOneDirective extends EventLoadDirective<EventLoadOneComponent> {
  constructor(private ref: ViewContainerRef) {
    super(ref);
  }
}
