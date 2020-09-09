import { Component, OnInit } from "@angular/core";
import Recorder from "js-audio-recorder";

import { Howl } from "howler";
import { WordService } from "src/app/core/word.service";
import { ActivatedRoute } from "@angular/router";
import { ASRService } from "src/app/core/asr.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-word-play",
  templateUrl: "./word-play.component.html",
  styleUrls: ["./word-play.component.scss"],
})
export class WordPlayComponent implements OnInit {
  constructor(
    private wordService: WordService,
    private asrService: ASRService,
    private route: ActivatedRoute
  ) {}

  // indicate to play id
  playId = -1;

  recordId = -1;
  // indicate to analyze progress
  status = "";

  // word audio list
  word: any;
  sound: Howl;
  recorder = new Recorder({ sampleRate: 16000 });

  tip: string = "";

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.wordService.getWordById(id).subscribe((word: any) => {
      this.word = word;
    });
  }

  onPlay(id: number) {
    this.playId = this.playId === id ? -1 : id;

    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [this.word.audios[id].audio.url],
    });

    this.sound.play();
  }

  onRecord(id: number) {
    this.recordId = id;
    this.recorder.start();
    this.status = "录音中..";
    this.tip = "";
    setTimeout(() => {
      this.recorder.stop();
      this.status = "";
    }, 3000);
  }

  onRecordPlay(id: number) {
    if (id != this.recordId) {
      this.tip = "请先录音！";
    } else {
      this.recorder.play();
      this.tip = "";
    }
  }

  onRecordDownload(id: number) {
    if (id != this.recordId) {
      this.tip = "请先录音！";
    } else {
      this.tip = "";
      const downloadEl = document.createElement("a");
      downloadEl.innerHTML = "download";
      downloadEl.download = "audio.wav";
      downloadEl.href = URL.createObjectURL(this.recorder.getWAVBlob());
      document.body.appendChild(downloadEl);
      downloadEl.click();
      document.body.removeChild(downloadEl);
    }
  }

  onAnalyze(id: number) {
    if (id != this.recordId) {
      this.tip = "请先录音！";
    } else {
      this.tip = "";
      forkJoin(
        this.asrService.asrByUrl(this.word.audios[id].audio.url),
        this.asrService.asr(this.recorder.getWAVBlob())
      ).subscribe((msgs) => {
        if (msgs[0].err_msg === "success." && msgs[1].err_msg === "success.") {
          let score = this.asrService.calcScore(
            msgs[0].result[0],
            msgs[1].result[0]
          );

          if (score >= 50) {
            this.tip = "很好！";
          }

          if (score < 50) {
            this.tip = "继续努力！";
          }
        } else {
          this.tip = "请先录音！";
        }
      });
    }
  }
}
