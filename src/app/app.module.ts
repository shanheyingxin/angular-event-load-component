import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { EventLoadFourDirective } from "./@_event-load/@four/event-load-four.directive";
import { EventLoadFourStore } from "./@_event-load/@four/event-load-four.store";
import { EventLoadOneDirective } from "./@_event-load/@one/event-load-one.directive";
import { EventLoadOneStore } from "./@_event-load/@one/event-load-one.store";
import { EventLoadThreeDirective } from "./@_event-load/@three/event-load-three.directive";
import { EventLoadThreeStore } from "./@_event-load/@three/event-load-three.store";
import { EventLoadTwoDirective } from "./@_event-load/@two/event-load-two.directive";
import { EventLoadTwoStore } from "./@_event-load/@two/event-load-two.store";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    EventLoadOneDirective,
    EventLoadTwoDirective,
    EventLoadThreeDirective,
    EventLoadFourDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "1",
        loadChildren: () =>
          import("./@one/one.module").then((x) => x.OneModule),
      },
      {
        path: "2",
        loadChildren: () =>
          import("./@two/two.module").then((x) => x.TwoModule),
      },
      {
        path: "3",
        loadChildren: () =>
          import("./@three/three.module").then((x) => x.ThreeModule),
      },
      {
        path: "4",
        loadChildren: () =>
          import("./@four/four.module").then((x) => x.FourModule),
      },
    ]),
  ],
  providers: [
    EventLoadOneStore,
    EventLoadTwoStore,
    EventLoadThreeStore,
    EventLoadFourStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
