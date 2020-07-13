import { Component, OnInit } from "@angular/core";
import { SentenceService } from "src/app/core/sentence.service";

@Component({
  selector: "app-story-list",
  templateUrl: "./story-list.component.html",
  styleUrls: ["./story-list.component.scss"],
})
export class StoryListComponent implements OnInit {
  constructor(private sentenceService: SentenceService) {}

  ngOnInit() {}
}
