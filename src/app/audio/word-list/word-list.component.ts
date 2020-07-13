import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { Howl, Howler } from "howler";
import { environment } from "src/environments/environment";
import { WordService } from "src/app/core/word.service";
@Component({
  selector: "app-word-list",
  templateUrl: "./word-list.component.html",
  styleUrls: ["./word-list.component.scss"],
})
export class WordListComponent implements OnInit {
  constructor(
    private wordService: WordService,
    private cdr: ChangeDetectorRef
  ) {}
  words: any[];
  categories: any[];
  hash = {};
  pre = null;
  sound: Howl = null;

  initAudioVars() {
    this.pre = null;
    this.sound = null;
    this.words.forEach((word) => {
      word.isPlay = false;
      this.hash[word.id] = word;
    });
    if (this.sound) {
      this.sound.stop();
    }
  }
  ngOnInit() {
    this.wordService.getWords().subscribe((categories) => {
      this.categories = categories;
      this.words = <any[]>categories[0].dialects;
      this.initAudioVars();
    });
  }
  // Audio Play Part
  play(e, cur) {
    // if the word is first played or user click the word twice
    if (!this.pre || (this.pre && this.pre.id === cur.id)) {
      this.hash[cur.id].isPlay = !this.hash[cur.id].isPlay;

      this.hash[cur.id].isPlay
        ? this.playAudio(this.hash[cur.id])
        : this.pauseAudio();
    }
    // if two word not same, then pause previous word and play current word
    else {
      this.hash[this.pre.id].isPlay = false;
      this.hash[cur.id].isPlay = true;
      this.pauseAudio();
      this.playAudio(this.hash[cur.id]);
    }

    this.pre = cur;
  }

  playAudio(word) {
    this.sound = new Howl({
      src: [environment.api_url + word.url],
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

  changeWords($event, words) {
    this.words = words;
    this.initAudioVars();
  }
}
