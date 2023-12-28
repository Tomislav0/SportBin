import { Component } from "@angular/core";
import { AdminTabName } from "../admin-header";

@Component({
	selector: "app-admin-page",
	templateUrl: "./admin-page.component.html",
	styleUrls: ["./admin-page.component.css"],
})
export class AdminPageComponent {
	public currentTab: AdminTabName = AdminTabName.EventsTab;
	public onTabChange(tab: AdminTabName) {
		this.currentTab = tab;
	}
}
