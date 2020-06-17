import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { WordListComponent } from "./word-list/word-list.component";
import { StoryListComponent } from "./story-list/story-list.component";
import { SentenceListComponent } from "./sentence-list/sentence-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "src/core/core.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordListComponent,
    StoryListComponent,
    SentenceListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
