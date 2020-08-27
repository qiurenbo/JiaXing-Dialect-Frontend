import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ResearchComponent } from "./research.component";

const routes: Routes = [
  { path: "", component: ResearchComponent },
  {
    path: ":id",
    component: ResearchComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRoutingModule {}
