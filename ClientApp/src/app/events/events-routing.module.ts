import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsPageComponent } from "./details-page/details-page.component copy";

const routes: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{
		path: "details/:eventId",
		component: DetailsPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EventsRoutingModule {}
