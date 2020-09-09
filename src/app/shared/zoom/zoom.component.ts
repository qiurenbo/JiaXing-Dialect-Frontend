import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-zoom",
  templateUrl: "./zoom.component.html",
  styleUrls: ["./zoom.component.scss"],
})
export class ZoomComponent implements OnInit {
  constructor() {}

  @Input()
  url: string;

  show = true;

  @Output()
  close = new EventEmitter<any>();

  @HostListener("click", ["$event"])
  onClick(event: any) {
    if (event.target.tagName !== "IMG") {
      this.show = false;
      this.close.emit(null);
    } else {
    }
  }

  ngOnInit() {}
}
