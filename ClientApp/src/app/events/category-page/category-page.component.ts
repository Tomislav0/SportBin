import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventDTO, ICategoryDTO } from "src/app/models";
import { CategoryService } from "src/app/services/category.service";
import { EventService } from "src/app/services/event.service";

@Component({
	selector: "app-category-page",
	templateUrl: "./category-page.component.html",
	styleUrls: ["./category-page.component.css"],
})
export class CategoryPageComponent implements OnInit {
	constructor(
		public eventService: EventService,
		public route: ActivatedRoute,
		public categoryService: CategoryService
	) {
		this.route.params.subscribe((params) => {
			const categoryId = params["categoryId"];
			this.categoryService.getCategoryById(categoryId).subscribe(
				(result: ICategoryDTO) => {
					this.category = result;
				},
				(error) => console.error(error)
			);
		});
	}

	public categoryEvents: EventDTO[] = [];
	public filteredCategoryEvents: EventDTO[] = [];
	public category: ICategoryDTO | undefined;
	searchText: string = "";

	ngOnInit() {
		this.route.params.subscribe((params) => {
			const categoryId = params["categoryId"];
			this.eventService.getEventsByCategory(categoryId).subscribe(
				(result: EventDTO[]) => {
					this.categoryEvents = result;
					this.filteredCategoryEvents = this.categoryEvents;
				},
				(error) => console.error(error)
			);
		});
	}

	onSearchTextEntered(searchValue: string) {
		this.searchText = searchValue;
		this.filteredCategoryEvents = this.categoryEvents.filter(
			(e) =>
				e.teamOneName
					.toLowerCase()
					.includes(this.searchText.toLowerCase()) ||
				e.teamTwoName
					.toLowerCase()
					.includes(this.searchText.toLowerCase())
		);
	}
}
