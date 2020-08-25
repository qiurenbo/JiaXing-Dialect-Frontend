import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { VideoComponent } from "./video.component";
import { VideoPlayComponent } from "./video-play.component";

const routes: Routes = [
  { path: "", component: VideoComponent, pathMatch: "full" },
  { path: ":id", component: VideoPlayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
