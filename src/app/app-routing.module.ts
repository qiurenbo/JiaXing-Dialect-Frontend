import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview/overview.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "audio",
    loadChildren: () =>
      import("./audio/audio.module").then((m) => m.AudioModule),
  },
  { path: "overview", component: OverviewComponent },
  {
    path: "related",
    loadChildren: () =>
      import("./related/related.module").then((m) => m.RelatedModule),
  },
  {
    path: "video",
    loadChildren: () =>
      import("./video/video.module").then((m) => m.VideoModule),
  },
  { path: "", pathMatch: "full", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
