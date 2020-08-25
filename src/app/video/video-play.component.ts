import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VideoService } from "../core/video.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-video-play",
  templateUrl: "./video-play.component.html",
  styleUrls: ["./video-play.component.scss"],
})
export class VideoPlayComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private videoService: VideoService
  ) {}
  id: string;
  video: any;
  url: string;
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.videoService.getVideoById(this.id).subscribe((video) => {
      this.video = video;
      this.url = environment.api_url + this.video.video[0].url;
      console.log(this.video);
    });
  }
}
