import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WordListComponent } from "./word-list/word-list.component";
import { AudioComponent } from "./audio.component";
import { LearningComponent } from "./learning/learning.component";
import { WordPlayComponent } from "./word-play/word-play.component";

const routes: Routes = [
  { path: "", component: AudioComponent, pathMatch: "full" },
  { path: "wordList", component: WordListComponent },
  { path: "learning", component: LearningComponent },
  { path: "wordPlaying/:id", component: WordPlayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioRoutingModule {}
