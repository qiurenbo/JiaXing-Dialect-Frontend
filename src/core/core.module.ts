import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import { WordService } from "./word.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [WordService],
  exports: [HttpClientModule],
})
export class CoreModule {}
