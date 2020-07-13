import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from "./home/home.component";
import { AudioComponent } from "./audio/audio.component";
import { OverviewComponent } from "./overview/overview.component";
import { WordListComponent } from "./audio/word-list/word-list.component";
import { StoryListComponent } from "./audio/story-list/story-list.component";
import { SentenceListComponent } from "./audio/sentence-list/sentence-list.component";
import { SharedModule } from "./shared/shared.module";
import { RelatedModule } from "./related/related.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordListComponent,
    StoryListComponent,
    SentenceListComponent,
    AudioComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RelatedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
