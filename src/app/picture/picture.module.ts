import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PictureComponent } from "./picture.component";
import { PictureRoutingModule } from "./picture-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, PictureRoutingModule, SharedModule],
  declarations: [PictureComponent],
})
export class PictureModule {}
