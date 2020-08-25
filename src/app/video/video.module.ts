import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoRoutingModule } from "./video-routing.module";
import { VideoComponent } from "./video.component";
import { VideoPlayComponent } from "./video-play.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [VideoComponent, VideoPlayComponent],
  imports: [CommonModule, VideoRoutingModule, SharedModule, VideoRoutingModule],
  exports: [],
  providers: [],
})
export class VideoModule {}
