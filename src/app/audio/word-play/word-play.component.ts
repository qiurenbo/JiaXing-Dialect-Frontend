import { Component, OnInit } from "@angular/core";
import { Howl } from "howler";
import Psittacus from "psittacus";
@Component({
  selector: "app-word-play",
  templateUrl: "./word-play.component.html",
  styleUrls: ["./word-play.component.scss"],
})
export class WordPlayComponent implements OnInit {
  constructor() {}
  playId = -1;
  sound: Howl;
  psittacus = new Psittacus();
  status = "";
  items = [
    {
      region: "嘉兴",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "陈曦",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "嘉兴",
      duration: "00:03",
      sex: "女",
      age: "中年",
      name: "蒋丽",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "嘉兴",
      duration: "00:01",
      sex: "男",
      age: "少年",
      name: "王璇",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "平湖",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "陈曦",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "平湖",
      duration: "00:01",
      sex: "女",
      age: "中年",
      name: "王建国",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "海宁",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "王璇",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "海宁",
      duration: "00:02",
      sex: "男",
      age: "中年",
      name: "陈一",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "海盐",
      duration: "00:01",
      sex: "女",
      age: "中年",
      name: "蒋丽",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "海盐",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "王璇",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "桐乡",
      duration: "00:03",
      sex: "女",
      age: "中年",
      name: "陈曦",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "桐乡",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "蒋丽",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "嘉善",
      duration: "00:02",
      sex: "女",
      age: "中年",
      name: "王璇",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "嘉善",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "陈曦",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
    {
      region: "普通话",
      duration: "00:01",
      sex: "男",
      age: "中年",
      name: "陈曦",
      url: "/uploads/呆子_1bd479940c.mp3",
    },
  ];
  ngOnInit() {}

  onPlay(id) {
    this.playId = this.playId === id ? -1 : id;
    if (this.sound) {
      this.sound.stop();
    }
    this.sound = new Howl({
      // src: [this.items[id].url],
      src: ["http://localhost:1337/uploads/呆子_1bd479940c.mp3"],
    });

    this.sound.play();
  }

  onRecord() {
    this.psittacus.start();
    this.status = "录音中..";
    setTimeout(() => {
      this.psittacus.stop();
      this.status = "评分:85";
    }, 3000);
  }
  onExport() {
    this.psittacus.export("wav", (blob) => {
      const downloadEl = document.createElement("a");
      downloadEl.innerHTML = "download";
      downloadEl.download = "audio.wav";
      downloadEl.href = URL.createObjectURL(blob);
      document.body.appendChild(downloadEl);
      downloadEl.click();
      document.body.removeChild(downloadEl);
    });
  }
}
