import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  AfterViewInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PictureService } from "../core/picture.service";
import { ZoomComponent } from "../shared/zoom/zoom.component";
import { Location } from "@angular/common";
@Component({
  selector: "app-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.scss"],
})
export class PictureComponent implements OnInit, AfterViewInit {
  pictures = [];
  pageSize = 50;
  pageTotal = 1000; // will init after ngOnInit
  start = 0;
  index = 0;
  isFinished = false;
  constructor(
    private pictureService: PictureService,
    private resolver: ComponentFactoryResolver,
    private vc: ViewContainerRef,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["start"]) {
        this.start = params["start"];
        this.index = this.start / this.pageSize;
      }
    });
    this.pictureService.getCount().subscribe((count: number) => {
      this.pageTotal = count;
    });
    this.loadPictures();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.isFinished = true;
  }

  pageChange(index: number) {
    this.start = index * this.pageSize;
    this.loadPictures();
  }

  loadPictures() {
    this.pictureService
      .getPictures(this.start, this.pageSize)
      .subscribe((pictures) => {
        this.pictures = pictures;
      });

    this.location.replaceState("audio/pictureList", `start=${this.start}`);
  }

  zoom(url: string) {
    const factory: any = this.resolver.resolveComponentFactory(ZoomComponent);
    const ref = this.vc.createComponent<ZoomComponent>(factory);
    ref.instance.url = url;
    ref.instance.close.subscribe((msg) => {
      console.log(msg);
      ref.destroy();
    });
  }
}
