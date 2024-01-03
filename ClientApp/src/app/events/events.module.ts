import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsRoutingModule } from "./events-routing.module";
import { HomeComponent } from "./home/home.component";
import { DetailsPageComponent } from "./details-page/details-page.component";
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
	declarations: [HomeComponent, DetailsPageComponent, EventCardComponent],
	imports: [CommonModule, EventsRoutingModule],
})
export class EventsModule {}
