import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
} from "@angular/core";
import { PictureService } from "../core/picture.service";
import { ZoomComponent } from "../shared/zoom/zoom.component";

@Component({
  selector: "app-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.scss"],
})
export class PictureComponent implements OnInit {
  pictures = [];

  constructor(
    private pictureService: PictureService,
    private resolver: ComponentFactoryResolver,
    private vc: ViewContainerRef
  ) {}

  ngOnInit() {
    this.pictureService.getPictures().subscribe((pictures) => {
      this.pictures = pictures;
    });
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
