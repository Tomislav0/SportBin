import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CategoryPageComponent } from './category-page/category-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsPageComponent,
    EventCardComponent,
    CategoryPageComponent,
  ],
  imports: [CommonModule, EventsRoutingModule],
})
export class EventsModule {}
