import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RelatedComponent } from "./related.component";
import { RelatedContentComponent } from "./related-content.component";

const routes: Routes = [
  { path: "", component: RelatedComponent },
  {
    path: ":id",
    component: RelatedContentComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatedRoutingModule {}
