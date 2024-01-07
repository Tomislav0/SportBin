import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
	selector: "admin-header",
	templateUrl: "./admin-header.component.html",
	styleUrls: ["./admin-header.component.css"],
})
export class AdminHeaderComponent {
	@Output() tabChangeDetected = new EventEmitter<AdminTabName>();
	@Input() public isEditEvent: boolean = false;
	@Input() currentTab: AdminTabName = AdminTabName.EventsTab;

	public changeTab(tab: string) {
		this.currentTab = tab;
		this.isEditEvent = false;
		this.tabChangeDetected.emit(tab);
	}

	public getTabTitle() {
		return this.isEditEvent ? "Editiranje Eventa" : "Novi Event";
	}
}

export class AdminTabName {
	public static EventsTab = "tab1";
	public static NewEventTab = "tab2";
	public static Configuration = "tab3";
}
