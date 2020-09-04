import { Component, OnInit } from "@angular/core";
import Recorder from "js-audio-recorder";

import { Howl } from "howler";
import { CharacterService } from "src/app/core/character.service";
import { ActivatedRoute } from "@angular/router";
import { ASRService } from "src/app/core/asr.service";

@Component({
  selector: "app-character-play",
  templateUrl: "./character-play.component.html",
  styleUrls: ["./character-play.component.scss"],
})
export class CharacterPlayComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private asrService: ASRService,
    private route: ActivatedRoute
  ) {}

  // indicate to play id
  playId = -1;

  // indicate to analyze progress
  status = "";

  // character audio list
  character: any;
  sound: Howl;
  recorder = new Recorder({ sampleRate: 16000 });
  translate: string = "";
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.characterService.getCharacterById(id).subscribe((character: any) => {
      this.character = character;
    });
  }

  onPlay(id: number) {
    this.playId = this.playId === id ? -1 : id;

    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [this.character.audios[id].audio.url],
    });

    this.sound.play();
  }

  onRecord() {
    this.recorder.start();
    this.status = "录音中..";
    this.translate = "";
    setTimeout(() => {
      this.recorder.stop();
      this.status = "";
    }, 3000);
  }

  onRecordPlay() {
    this.recorder.play();
  }
  onRecordDownload() {
    const downloadEl = document.createElement("a");
    downloadEl.innerHTML = "download";
    downloadEl.download = "audio.wav";
    downloadEl.href = URL.createObjectURL(this.recorder.getWAVBlob());
    document.body.appendChild(downloadEl);
    downloadEl.click();
    document.body.removeChild(downloadEl);
  }
  onAnalyze() {
    this.asrService.asr(this.recorder.getWAVBlob()).subscribe((msg) => {
      this.translate = msg.result[0];
    });
  }
}
