import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioRoutingModule } from "./audio-routing.module";
import { WordComponent } from "./word/word.component";
import { AudioComponent } from "./audio.component";
import { WordPlayComponent } from "./word-play/word-play.component";
import { SharedModule } from "../shared/shared.module";
import { SentenceComponent } from "./sentence/sentence.component";
import { SentencePlayComponent } from "./sentence-play/sentence-play.component";
import { SongComponent } from "./song/song.component";
import { SongPlayComponent } from "./song-play/song-play.component";
import { StoryComponent } from "./story/story.component";
import { StoryPlayComponent } from "./story-play/story-play.component";

@NgModule({
  declarations: [
    AudioComponent,
    WordComponent,
    WordPlayComponent,
    SentenceComponent,
    SentencePlayComponent,
    SongComponent,
    SongPlayComponent,
    StoryComponent,
    StoryPlayComponent,
  ],
  imports: [CommonModule, AudioRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class AudioModule {}
