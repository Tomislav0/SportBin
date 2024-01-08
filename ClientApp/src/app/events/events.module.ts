import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SelectedEventsComponent } from './selected-events/selected-events.component';
import { AllEventsComponent } from './all-events/all-events.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsPageComponent,
    EventCardComponent,
    CategoryPageComponent,
    SearchComponent,
    SelectedEventsComponent,
    AllEventsComponent,
  ],
  imports: [CommonModule, EventsRoutingModule, FormsModule],
})
export class EventsModule {}
