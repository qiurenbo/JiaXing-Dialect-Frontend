import { Component, OnInit } from "@angular/core";
import { RelatedContentService } from "../core/related-content.service";

@Component({
  selector: "app-related",
  templateUrl: "./related.component.html",
  styleUrls: ["./related.component.scss"],
})
export class RelatedComponent implements OnInit {
  lists: any = [];
  start: number = 0;
  end: number = 12;

  pageTotal: number = 28;
  pageSize: number = 12;

  constructor(private listService: RelatedContentService) {}

  ngOnInit(): void {
    this.listService.getRelatedParagraphList().subscribe((lists) => {
      this.lists = lists;
      this.pageTotal = lists.length;
    });
  }

  pageChange(index) {
    this.start = index * this.pageSize;
    this.end = this.start + this.pageSize;
  }
}
