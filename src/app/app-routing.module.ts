import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AudioComponent } from "./audio/audio.component";
import { OverviewComponent } from "./overview/overview.component";
import { WordListComponent } from "./audio/word-list/word-list.component";
import { SentenceListComponent } from "./audio/sentence-list/sentence-list.component";
import { HomeComponent } from "./home/home.component";
import { RelatedComponent } from "./related/related.component";

const routes: Routes = [
  { path: "audio/wordList", component: WordListComponent },
  { path: "audio", component: AudioComponent },
  { path: "audio/sentenceList", component: SentenceListComponent },
  { path: "overview", component: OverviewComponent },
  {
    path: "related",
    loadChildren: () =>
      import("./related/related.module").then((m) => m.RelatedModule),
  },
  { path: "", pathMatch: "full", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
