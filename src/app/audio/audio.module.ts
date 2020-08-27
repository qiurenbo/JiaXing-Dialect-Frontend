import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioRoutingModule } from "./audio-routing.module";
import { WordListComponent } from "./word-list/word-list.component";
import { StoryListComponent } from "./story-list/story-list.component";
import { SentenceListComponent } from "./sentence-list/sentence-list.component";
import { AudioComponent } from "./audio.component";
import { WordPlayComponent } from "./word-play/word-play.component";

@NgModule({
  declarations: [
    AudioComponent,
    WordListComponent,
    StoryListComponent,
    SentenceListComponent,
    WordPlayComponent,
  ],
  imports: [CommonModule, AudioRoutingModule],
  exports: [],
  providers: [],
})
export class AudioModule {}
