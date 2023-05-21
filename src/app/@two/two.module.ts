import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TwoComponent } from "./two.component";

@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: TwoComponent,
      },
    ]),
  ],
})
export class TwoModule {}
