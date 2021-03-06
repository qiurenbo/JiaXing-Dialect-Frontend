import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import { WordService } from "./word.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SentenceService } from "./sentence.service";
import { RelatedContentService } from "./related-content.service";
import { VideoService } from "./video.service";
import { ResearchService } from "./research.service";
import { CharacterService } from "./character.service";
import { ASRService } from "./asr.service";
import { PictureService } from "./picture.service";
import { SongService } from "./song.service";

@NgModule({
  imports: [CommonModule, HttpClientModule, FlexLayoutModule],
  declarations: [],
  providers: [
    VideoService,
    WordService,
    SentenceService,
    RelatedContentService,
    ResearchService,
    CharacterService,
    ASRService,
    PictureService,
    SongService,
  ],
  exports: [HttpClientModule, FlexLayoutModule],
})
export class CoreModule {}
