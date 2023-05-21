import { Directive, ViewContainerRef } from "@angular/core";
import { EventLoadDirective } from "../event-load.directive";
import { EventLoadThreeComponent } from "./event-load-three.component";

@Directive({
  selector: "event-load-three",
})
export class EventLoadThreeDirective extends EventLoadDirective<EventLoadThreeComponent> {
  constructor(private ref: ViewContainerRef) {
    super(ref);
  }
}
