import { Component, OnInit } from "@angular/core";

import { Howl } from "howler";
import { SongService } from "src/app/core/song.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-song-play",
  templateUrl: "./song-play.component.html",
  styleUrls: ["./song-play.component.scss"],
})
export class SongPlayComponent implements OnInit {
  constructor(
    private songService: SongService,
    private route: ActivatedRoute
  ) {}

  // indicate to play id
  playId = -1;

  recordId = -1;
  // indicate to analyze progress
  status = "";

  // song audio list
  song: any;
  sound: Howl;

  tip: string = "";

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.songService.getSongById(id).subscribe((song: any) => {
      this.song = song;
    });
  }

  onPlay(id: number) {
    this.playId = this.playId === id ? -1 : id;

    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [this.song.audios[id].audio.url],
    });

    this.sound.play();
  }
}
