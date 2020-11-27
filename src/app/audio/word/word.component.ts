import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
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
    private route: ActivatedRoute,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}
  words: any[];
  searchKey = "";

  pageSize = 50;
  pageTotal = 1000; // will init after ngOnInit
  start = 0;
  hash = {};
  pre = null;
  index = 0;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["start"]) {
        this.start = params["start"];
        this.index = this.start / this.pageSize;
      }

      if (params["searchKey"]) {
        this.searchKey = params["searchKey"];
      }
    });
    this.wordService.getCount(this.searchKey).subscribe((count: number) => {
      this.pageTotal = count;
    });
    this.loadWords();
  }

  pageChange(index: number) {
    this.start = index * this.pageSize;
    this.loadWords();
  }

  loadWords() {
    this.wordService
      .getWords(this.start, this.pageSize, this.searchKey)
      .subscribe((words) => {
        this.words = words;
      });

    this.replaceState();
  }
  navigateToPlay(id: string) {
    this.router.navigate([`./play/${id}`], { relativeTo: this.route });
  }

  replaceState() {
    this.location.replaceState(
      "audio/wordList",
      `start=${this.start}&searchKey=${this.searchKey}`
    );
  }
  search() {
    console.log("searchKey:" + this.searchKey);
    this.wordService.getCount(this.searchKey).subscribe((count: number) => {
      this.start = 0;
      this.pageTotal = count;
      this.index = 0;
      this.replaceState();
      this.wordService
        .getWords(this.start, this.pageSize, this.searchKey)
        .subscribe((words) => {
          this.words = words;
        });
    });
  }
}
