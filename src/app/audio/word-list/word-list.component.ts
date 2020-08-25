import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { Howl } from "howler";
import { WordService } from "src/app/core/word.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-word-list",
  templateUrl: "./word-list.component.html",
  styleUrls: ["./word-list.component.scss"],
})
export class WordListComponent implements OnInit {
  constructor(private wordService: WordService, private router: Router) {}
  words: any[];
  categories: any[];
  hash = {};
  pre = null;
  sound: Howl = null;

  ngOnInit() {
    this.wordService.getWords().subscribe((categories) => {
      this.categories = categories;
      this.words = <any[]>categories[0].dialects;
    });
  }
  changeWords($event, words) {
    this.words = words;
  }

  navigateToPlay(id) {
    this.router.navigateByUrl(`/audio/wordPlaying/${id}`);
  }
}
