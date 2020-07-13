import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatedContentComponent } from "./related-content.component";
import { RelatedComponent } from "./related.component";
import { SharedModule } from "../shared/shared.module";
import { RelatedRoutingModule } from "./related-routing.module";

@NgModule({
  declarations: [RelatedContentComponent, RelatedComponent],
  imports: [CommonModule, SharedModule, RelatedRoutingModule],
  exports: [RelatedContentComponent, RelatedComponent],
  providers: [],
})
export class RelatedModule {}
