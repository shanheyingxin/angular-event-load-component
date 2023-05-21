import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ThreeComponent } from "./three.component";

@NgModule({
  declarations: [ThreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ThreeComponent,
      },
    ]),
  ],
})
export class ThreeModule {}
