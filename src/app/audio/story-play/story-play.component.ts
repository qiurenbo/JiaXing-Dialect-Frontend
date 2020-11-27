import { Component, OnInit } from "@angular/core";

import { Howl, Howler } from "howler";
import { StoryService } from "src/app/core/story.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-story-play",
  templateUrl: "./story-play.component.html",
  styleUrls: ["./story-play.component.scss"],
})
export class StoryPlayComponent implements OnInit {
  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (this.sound) {
        this.sound.stop();
      }
    });
  }

  // indicate to play id
  playId = -1;

  recordId = -1;
  // indicate to analyze progress
  status = "";

  // story audio list
  story: any;
  sound: Howl;

  tip: string = "";

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.storyService.getStoryById(id).subscribe((story: any) => {
      this.story = story;
    });
  }

  onPlay(id: number) {
    this.playId = this.playId === id ? -1 : id;

    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      src: [this.story.audios[id].audio.url],
    });

    this.sound.play();
  }
}
