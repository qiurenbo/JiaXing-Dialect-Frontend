import { Component, OnInit } from "@angular/core";

import { Howl, Howler } from "howler";
import { SongService } from "src/app/core/song.service";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-song-play",
  templateUrl: "./song-play.component.html",
  styleUrls: ["./song-play.component.scss"],
})
export class SongPlayComponent implements OnInit {
  constructor(
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (this.sound) {
        this.sound.stop();
      }
    });
  }

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
