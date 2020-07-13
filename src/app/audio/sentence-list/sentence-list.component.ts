import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { Howl } from "howler";
import { environment } from "src/environments/environment";
import { SentenceService } from "src/app/core/sentence.service";
@Component({
  selector: "app-sentence-list",
  templateUrl: "./sentence-list.component.html",
  styleUrls: ["./sentence-list.component.scss"],
})
export class SentenceListComponent implements OnInit {
  sentences: any[] = [];
  hash = {};
  pre = null;
  sound: Howl = null;
  constructor(
    private sentenceService: SentenceService,
    private cdr: ChangeDetectorRef
  ) {}

  initAudioVars() {
    this.pre = null;
    this.sound = null;
    this.sentences.forEach((sentence) => {
      sentence.isPlay = false;
      this.hash[sentence.id] = sentence;
    });
    if (this.sound) {
      this.sound.stop();
    }
  }

  ngOnInit() {
    this.sentenceService.getSentences().subscribe((categories) => {
      this.sentences = categories[0].dialects;
      this.initAudioVars();
    });
  }

  // Audio Play Part
  play(e, cur) {
    // if the sentence is first played or user click the sentence twice
    if (!this.pre || (this.pre && this.pre.id === cur.id)) {
      this.hash[cur.id].isPlay = !this.hash[cur.id].isPlay;

      this.hash[cur.id].isPlay
        ? this.playAudio(this.hash[cur.id])
        : this.pauseAudio();
    }
    // if two sentence not same, then pause previous sentence and play current sentence
    else {
      this.hash[this.pre.id].isPlay = false;
      this.hash[cur.id].isPlay = true;
      this.pauseAudio();
      this.playAudio(this.hash[cur.id]);
    }

    this.pre = cur;
  }

  playAudio(sentence) {
    this.sound = new Howl({
      src: [environment.api_url + sentence.url],
    });

    this.sound.on("end", () => {
      this.hash[this.pre.id].isPlay = false;
      this.pre = null;
      this.cdr.detectChanges();
    });

    this.sound.play();
  }
  pauseAudio() {
    this.sound.stop();
  }
}
