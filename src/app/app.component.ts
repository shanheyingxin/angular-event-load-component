import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { EventLoadFourDirective } from "./@_event-load/@four/event-load-four.directive";
import { EventLoadFourStore } from "./@_event-load/@four/event-load-four.store";
import { EventLoadOneDirective } from "./@_event-load/@one/event-load-one.directive";
import { EventLoadOneStore } from "./@_event-load/@one/event-load-one.store";
import { EventLoadThreeDirective } from "./@_event-load/@three/event-load-three.directive";
import { EventLoadThreeStore } from "./@_event-load/@three/event-load-three.store";
import { EventLoadTwoDirective } from "./@_event-load/@two/event-load-two.directive";
import { EventLoadTwoStore } from "./@_event-load/@two/event-load-two.store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(EventLoadOneDirective, { static: true })
  private eventLoadOneDirective!: EventLoadOneDirective;

  @ViewChild(EventLoadTwoDirective, { static: true })
  private eventLoadTwoDirective!: EventLoadTwoDirective;

  @ViewChild(EventLoadThreeDirective, { static: true })
  private eventLoadThreeDirective!: EventLoadThreeDirective;

  @ViewChild(EventLoadFourDirective, { static: true })
  private eventLoadFourDirective!: EventLoadFourDirective;

  constructor(
    private eventLoadOneStore: EventLoadOneStore,
    private eventLoadTwoStore: EventLoadTwoStore,
    private eventLoadThreeStore: EventLoadThreeStore,
    private eventLoadFourStore: EventLoadFourStore
  ) {
    /**
     * 注意，v16 ssr环境下，此写法会立即加载
     * 解决办法
     * - 判断运行环境
     * - 或者使用点击事件加载
     * 不使用ssr略过
     */
    this.eventLoadOneStore.load();
  }
  ngAfterViewInit(): void {
    const component = this.eventLoadOneStore.state$;
    this.eventLoadOneDirective.load(component);
  }
  eventLoadTwo() {
    this.eventLoadTwoDirective.load(this.eventLoadTwoStore.load());
  }
  eventLoadThree() {
    this.eventLoadThreeDirective.load(this.eventLoadThreeStore.load());
  }
  eventLoadFour() {
    this.eventLoadFourDirective.load(this.eventLoadFourStore.load());
  }
}
