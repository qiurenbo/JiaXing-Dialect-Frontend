import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { SentenceService } from "src/app/core/sentence.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-sentence-list",
  templateUrl: "./sentence.component.html",
  styleUrls: ["./sentence.component.scss"],
})
export class SentenceComponent implements OnInit {
  constructor(
    private sentenceService: SentenceService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  sentences: any[];

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
    });
    this.sentenceService.getCount().subscribe((count: number) => {
      this.pageTotal = count;
    });
    this.loadSentences();
  }

  pageChange(index: number) {
    this.start = index * this.pageSize;
    this.loadSentences();
  }

  loadSentences() {
    this.sentenceService
      .getSentences(this.start, this.pageSize)
      .subscribe((sentences) => {
        this.sentences = sentences;
      });

    this.location.replaceState("audio/sentenceList", `start=${this.start}`);
  }
  navigateToPlay(id: string) {
    this.router.navigate([`./play/${id}`], { relativeTo: this.route });
  }
}
