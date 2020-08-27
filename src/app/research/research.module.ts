import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ResearchComponent } from "./research.component";
import { ResearchRoutingModule } from "./research-routing.module";

@NgModule({
  imports: [CommonModule, ResearchRoutingModule, SharedModule],
  declarations: [ResearchComponent],
})
export class ResearchModule {}
