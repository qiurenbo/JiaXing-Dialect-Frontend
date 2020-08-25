import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from "./home/home.component";
import { OverviewComponent } from "./overview/overview.component";
import { SharedModule } from "./shared/shared.module";
import { RelatedModule } from "./related/related.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, OverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RelatedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
