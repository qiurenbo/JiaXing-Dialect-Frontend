import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  constructor() {}
  @Input()
  pageNumber: number;

  @Input()
  pageSize: number = 12;

  @Input()
  pageTotal: number;

  @Output()
  pageChange = new EventEmitter<number>();

  currentIdx = 0;

  selectChange(i: number): void {
    this.currentIdx = i;
    this.pageChange.emit(this.currentIdx);
  }

  clickPre(): void {
    if (this.currentIdx - 1 >= 0) {
      this.currentIdx--;
      this.pageChange.emit(this.currentIdx);
    }
  }

  clickNext(): void {
    if (this.currentIdx + 1 < this.pageNumber) {
      this.currentIdx++;
      this.pageChange.emit(this.currentIdx);
    }
  }

  ngOnInit() {
    this.pageNumber = Math.ceil(this.pageTotal / this.pageSize);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (!changes.pageNumber) {
      this.pageNumber = Math.ceil(this.pageTotal / this.pageSize);
    }
  }
}
