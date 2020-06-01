import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WordListComponent } from "./word-list/word-list.component";

const routes: Routes = [{ path: "wordList", component: WordListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
