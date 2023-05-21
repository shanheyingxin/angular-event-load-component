import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "event-load-one",
  imports: [],
  styles: [":host{display:block}"],
  template: "事件级懒加载 一 eg: 不需第一时间呈现的组件",
})
export class EventLoadOneComponent {}
