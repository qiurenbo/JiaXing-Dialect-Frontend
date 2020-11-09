import { Component, OnInit } from "@angular/core";

import { SentenceService } from "src/app/core/sentence.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-sentence",
  templateUrl: "./sentence.component.html",
  styleUrls: ["./sentence.component.scss"],
})
export class SentenceComponent implements OnInit {
  constructor(
    private sentenceService: SentenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  sentences: any[];

  hash = {};
  pre = null;

  ngOnInit() {
    this.sentenceService.getSentences().subscribe((sentences) => {
      this.sentences = sentences;
    });
  }

  navigateToPlay(id) {
    this.router.navigate([`./play/${id}`], {
      relativeTo: this.route,
    });
  }
}
