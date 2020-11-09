import { Component, OnInit } from "@angular/core";

import { SongService } from "src/app/core/song.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.scss"],
})
export class SongComponent implements OnInit {
  constructor(
    private songService: SongService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  songs: any[];

  hash = {};
  pre = null;

  ngOnInit() {
    this.songService.getSongs().subscribe((songs) => {
      this.songs = songs;
    });
  }

  navigateToPlay(id) {
    this.router.navigate([`./play/${id}`], {
      relativeTo: this.route,
    });
  }
}
