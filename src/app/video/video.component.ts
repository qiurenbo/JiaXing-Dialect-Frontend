import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  constructor() {}

  videos = [
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
    {
      id: "1",
      cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
      title: "测试视频",
    },
  ];
  ngOnInit(): void {}
}
