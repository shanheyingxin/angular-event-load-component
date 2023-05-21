import { ViewContainerRef } from "@angular/core";
import { Observable, of } from "rxjs";

export class EventLoadDirective<T> {
  constructor(private Vref: ViewContainerRef) {}

  load(component: Observable<T> | T) {
    const component$ =
      component instanceof Observable ? component : of(component);
    const load = component$.subscribe((component) => {
      if (component !== null) {
        this.Vref.clear();
        this.Vref.createComponent<T>(component as any);
        load.unsubscribe();
      }
    });
  }
}
