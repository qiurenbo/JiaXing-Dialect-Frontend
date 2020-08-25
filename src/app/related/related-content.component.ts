import { Component, OnInit, SecurityContext } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RelatedContentService } from "../core/related-content.service";
import { DomSanitizer } from "@angular/platform-browser";
import * as marked from "marked";

@Component({
  selector: "app-related-content",
  templateUrl: "./related-content.component.html",
  styleUrls: ["./related-content.component.scss"],
})
export class RelatedContentComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private http: RelatedContentService,
    private sanitizer: DomSanitizer
  ) {}

  content = "";
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id");
    this.http.getRelatedParagraph(id).subscribe((paragraph) => {
      this.content = marked(paragraph.content);
      this.sanitizer.sanitize(SecurityContext.HTML, this.content);
    });
  }
}
