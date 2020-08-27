import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PictureComponent } from "./picture.component";
const routes: Routes = [
  { path: "", component: PictureComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictureRoutingModule {}
