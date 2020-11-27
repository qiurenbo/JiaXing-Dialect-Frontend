import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PaginationComponent } from "./pagination/pagination.component";
import { ZoomComponent } from "./zoom/zoom.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [PaginationComponent, ZoomComponent],
  imports: [CommonModule, FlexLayoutModule, FormsModule],
  exports: [FlexLayoutModule, PaginationComponent, ZoomComponent, FormsModule],
})
export class SharedModule {}
