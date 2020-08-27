import { Component, OnInit } from "@angular/core";
import { ResearchService } from "../core/research.service";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-research",
  templateUrl: "./research.component.html",
  styleUrls: ["./research.component.scss"],
})
export class ResearchComponent implements OnInit {
  lists: any = [];
  start: number = 0;
  end: number = 12;
  pageTotal: number = 28;
  pageSize: number = 12;
  url = environment.api_url;
  constructor(private researchService: ResearchService) {}

  ngOnInit(): void {
    this.researchService.getResearches().subscribe((lists: Array<any>) => {
      this.lists = lists;
      this.pageTotal = lists.length;
    });
  }

  pageChange(index: number) {
    this.start = index * this.pageSize;
    this.end = this.start + this.pageSize;
  }
}
