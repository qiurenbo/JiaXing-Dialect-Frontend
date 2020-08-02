import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import { WordService } from "./word.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SentenceService } from "./sentence.service";
import { RelatedContentService } from "./related-content.service";

@NgModule({
  imports: [CommonModule, HttpClientModule, FlexLayoutModule],
  declarations: [],
  providers: [WordService, SentenceService, RelatedContentService],
  exports: [HttpClientModule, FlexLayoutModule],
})
export class CoreModule {}