import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PaginationComponent } from "./pagination/pagination.component";
@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [FlexLayoutModule, PaginationComponent],
})
export class SharedModule {}
