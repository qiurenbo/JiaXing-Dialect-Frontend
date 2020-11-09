import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WordComponent } from "./word/word.component";
import { AudioComponent } from "./audio.component";
import { WordPlayComponent } from "./word-play/word-play.component";
import { SentenceComponent } from "./sentence/sentence.component";
import { SentencePlayComponent } from "./sentence-play/sentence-play.component";
import { SongComponent } from "./song/song.component";
import { SongPlayComponent } from "./song-play/song-play.component";

const routes: Routes = [
  { path: "", component: AudioComponent, pathMatch: "full" },
  {
    path: "wordList",
    component: WordComponent,
  },

  {
    path: "wordList/play/:id",
    component: WordPlayComponent,
  },
  {
    path: "sentenceList",
    component: SentenceComponent,
  },
  {
    path: "sentenceList/play/:id",
    component: SentencePlayComponent,
  },
  {
    path: "songList",
    component: SongComponent,
  },
  {
    path: "songList/play/:id",
    component: SongPlayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioRoutingModule {}
