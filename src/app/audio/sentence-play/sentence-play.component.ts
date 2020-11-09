import { Component, OnInit } from "@angular/core";

import { Howl } from "howler";
import { SentenceService } from "src/app/core/sentence.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sentence-play",
  templateUrl: "./sentence-play.component.html",
  styleUrls: ["./sentence-play.component.scss"],
})
export class SentencePlayComponent implements OnInit {
  constructor(
    private sentenceService: SentenceService,
    private route: ActivatedRoute
  ) {}

  // indicate to play id
  playId = -1;

  recordId = -1;
  // indicate to analyze progress
  status = "";

  // sentence audio list
  sentence: any;
  sound: Howl;

  tip: string = "";

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.sentenceService.getSentenceById(id).subscribe((sentence: any) => {
      this.sentence = sentence;
    });
  }

  onPlay(id: number) {
    this.playId = this.playId === id ? -1 : id;

    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [this.sentence.audios[id].audio.url],
    });

    this.sound.play();
  }
}
