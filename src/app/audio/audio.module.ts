import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioRoutingModule } from "./audio-routing.module";
import { WordComponent } from "./word/word.component";
import { StoryListComponent } from "./story-list/story-list.component";
import { SentenceListComponent } from "./sentence-list/sentence-list.component";
import { AudioComponent } from "./audio.component";
import { WordPlayComponent } from "./word-play/word-play.component";
import { CharacterComponent } from "./character/character.component";
import { SharedModule } from "../shared/shared.module";
import { CharacterPlayComponent } from "./character-play/character-play.component";

@NgModule({
  declarations: [
    AudioComponent,
    WordComponent,
    StoryListComponent,
    SentenceListComponent,
    WordPlayComponent,
    CharacterComponent,
    CharacterPlayComponent,
  ],
  imports: [CommonModule, AudioRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class AudioModule {}
