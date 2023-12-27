import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsRoutingModule } from "./events-routing.module";
import { HomeComponent } from "./home/home.component";
import { DetailsPageComponent } from "./details-page/details-page.component copy";

@NgModule({
	declarations: [HomeComponent, DetailsPageComponent],
	imports: [CommonModule, EventsRoutingModule],
})
export class EventsModule {}
