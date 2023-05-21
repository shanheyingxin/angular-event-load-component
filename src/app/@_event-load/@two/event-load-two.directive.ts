import { Directive, ViewContainerRef } from "@angular/core";
import { EventLoadDirective } from "../event-load.directive";
import { EventLoadTwoComponent } from "./event-load-two.component";

@Directive({
  selector: "event-load-two",
})
export class EventLoadTwoDirective extends EventLoadDirective<EventLoadTwoComponent> {
  constructor(private ref: ViewContainerRef) {
    super(ref);
  }
}
