import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WordComponent } from "./word/word.component";
import { AudioComponent } from "./audio.component";
import { WordPlayComponent } from "./word-play/word-play.component";
import { CharacterComponent } from "./character/character.component";
import { CharacterPlayComponent } from "./character-play/character-play.component";

const routes: Routes = [
  { path: "", component: AudioComponent, pathMatch: "full" },
  {
    path: "wordList",
    component: WordComponent,
  },
  {
    path: "characterList",
    component: CharacterComponent,
  },
  {
    path: "characterList/play/:id",
    component: CharacterPlayComponent,
  },
  {
    path: "wordList/play/:id",
    component: WordPlayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioRoutingModule {}
