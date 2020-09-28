import { Component, OnInit } from "@angular/core";
import { VideoService } from "../core/video.service";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  constructor(private videoService: VideoService) {}

  videos: any[];
  ngOnInit(): void {
    this.videoService.getVideos().subscribe((videos) => {
      this.videos = videos;
    });
  }
}
