import { Component, OnInit } from "@angular/core";

import { StoryService } from "src/app/core/story.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"],
})
export class StoryComponent implements OnInit {
  constructor(
    private storyService: StoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  stories: any[];

  hash = {};
  pre = null;

  ngOnInit() {
    this.storyService.getStories().subscribe((stories) => {
      this.stories = stories;
    });
  }

  navigateToPlay(id) {
    this.router.navigate([`./play/${id}`], {
      relativeTo: this.route,
    });
  }
}
