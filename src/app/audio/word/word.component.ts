import { Component, OnInit } from "@angular/core";

import { WordService } from "src/app/core/word.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-word-list",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.scss"],
})
export class WordComponent implements OnInit {
  constructor(
    private wordService: WordService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  words: any[];

  hash = {};
  pre = null;

  ngOnInit() {
    this.wordService.getWords().subscribe((words) => {
      this.words = words;
    });
  }

  navigateToPlay(id: string) {
    this.router.navigate([`./play/${id}`], { relativeTo: this.route });
  }
}
