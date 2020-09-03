import { Component, OnInit } from "@angular/core";
import Psittacus from "psittacus";
import { Howl } from "howler";
import { CharacterService } from "src/app/core/character.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-character-play",
  templateUrl: "./character-play.component.html",
  styleUrls: ["./character-play.component.scss"],
})
export class CharacterPlayComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}
  playId = -1;
  status = "";
  character: any;
  sound: Howl;
  psittacus = new Psittacus();

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
