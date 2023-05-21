import { Directive, ViewContainerRef } from "@angular/core";
import { EventLoadDirective } from "../event-load.directive";
import { EventLoadFourComponent } from "./event-load-four.component";

@Directive({
  selector: "event-load-four",
})
export class EventLoadFourDirective extends EventLoadDirective<EventLoadFourComponent> {
  constructor(private ref: ViewContainerRef) {
    super(ref);
  }
}
