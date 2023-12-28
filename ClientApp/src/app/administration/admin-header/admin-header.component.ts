import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "admin-header",
	templateUrl: "./admin-header.component.html",
	styleUrls: ["./admin-header.component.css"],
})
export class AdminHeaderComponent {
	@Output() tabChangeDetected = new EventEmitter<AdminTabName>();

	public currentTab: AdminTabName = AdminTabName.EventsTab;

	public changeTab(tab: string) {
		this.currentTab = tab;
		this.tabChangeDetected.emit(tab);
	}
}

export class AdminTabName {
	public static EventsTab = "tab1";
	public static NewEventTab = "tab2";
	public static Configuration = "tab3";
}
