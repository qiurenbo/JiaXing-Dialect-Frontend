import { Component, OnInit } from "@angular/core";
import { Howl } from "howler";
import Psittacus from "psittacus";
import { WordService } from "src/app/core/word.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-word-play",
  templateUrl: "./word-play.component.html",
  styleUrls: ["./word-play.component.scss"],
})
export class WordPlayComponent implements OnInit {
  constructor(
    private wordService: WordService,
    private route: ActivatedRoute
  ) {}
  playId = -1;
  status = "";
  word: { audio: any } = null;
  sound: Howl;
  psittacus = new Psittacus();

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.wordService.getWordById(id).subscribe((word: any) => {
      console.log(word);
      this.word = word;
    });
  }

  onPlay(id: number) {
    this.playId = this.playId === id ? -1 : id;

    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      // src: [this.items[id].url],
      src: [this.word.audio[id].audio.url],
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
