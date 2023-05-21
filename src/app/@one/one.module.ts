import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OneComponent } from "./one.component";

@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: OneComponent,
      },
    ]),
  ],
})
export class OneModule {}
