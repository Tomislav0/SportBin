import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsPageComponent,
    EventCardComponent,
    CategoryPageComponent,
    SearchComponent,
  ],
  imports: [CommonModule, EventsRoutingModule, FormsModule],
})
export class EventsModule {}
