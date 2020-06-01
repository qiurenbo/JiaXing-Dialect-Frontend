import { Component, OnInit } from "@angular/core";
import { WordService } from "src/core/word.service";

@Component({
  selector: "app-word-list",
  templateUrl: "./word-list.component.html",
  styleUrls: ["./word-list.component.scss"],
})
export class WordListComponent implements OnInit {
  constructor(private wordService: WordService) {}
  words: any;
  ngOnInit() {
    this.wordService.getWords().subscribe((words) => {
      this.words = words;
    });
  }
}
