import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WordListComponent } from "./word-list/word-list.component";
import { HomeComponent } from "./home/home.component";
import { SentenceListComponent } from "./sentence-list/sentence-list.component";

const routes: Routes = [
  { path: "wordList", component: WordListComponent },
  { path: "sentenceList", component: SentenceListComponent },
  { path: "", pathMatch: "full", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
