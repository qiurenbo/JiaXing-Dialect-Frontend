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

@NgModule({
  declarations: [
    AudioComponent,
    WordComponent,
    WordPlayComponent,
    SentenceComponent,
    SentencePlayComponent,
    SongComponent,
    SongPlayComponent,
  ],
  imports: [CommonModule, AudioRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class AudioModule {}
