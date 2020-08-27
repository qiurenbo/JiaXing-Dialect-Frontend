import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.scss"],
})
export class PictureComponent implements OnInit {
  pictures = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 500; i++) {
      this.pictures.push({
        id: i + 1,
        cover: "http://localhost:1337/uploads/thumbnail_bg_b70c661d01.jpeg",
        title: "测试图片",
      });
    }
  }
}
