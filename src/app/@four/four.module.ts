import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FourComponent } from "./four.component";

@NgModule({
  declarations: [FourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: FourComponent,
      },
    ]),
  ],
})
export class FourModule {}
