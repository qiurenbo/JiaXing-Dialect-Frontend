import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PaginationComponent } from "./pagination/pagination.component";
import { ZoomComponent } from "./zoom/zoom.component";
@NgModule({
  declarations: [PaginationComponent, ZoomComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [FlexLayoutModule, PaginationComponent, ZoomComponent],
})
export class SharedModule {}
