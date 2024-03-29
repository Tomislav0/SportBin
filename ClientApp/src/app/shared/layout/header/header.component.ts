import { Component, EventEmitter, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AuthGuard } from "src/app/helpers/auth.guard";
import { ICategoryDTO } from "src/app/models";
import { AuthService } from "src/app/services/auth.service";
import { CategoryService } from "src/app/services/category.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
	public isExpanded = false;
	public isLoginPage: boolean = false;
	public isAuthorized = false;
	public categories: ICategoryDTO[] = [];
	@Output() adminLogoutClicked: EventEmitter<boolean> =
		new EventEmitter<boolean>();

	constructor(
		private categoryService: CategoryService,
		private router: Router,
		private authService: AuthService,
		private authGuard: AuthGuard
	) {
		this.isAuthorized = localStorage.getItem("auth_token") != null;
		this.authService.authorizedSubject.subscribe((result) => {
			this.isAuthorized = result;
		});
		this.router.events.subscribe((event: any) => {
			if (event instanceof NavigationEnd) {
				if (event.url === "/admin/login") {
					this.isLoginPage = true;
				} else {
					this.isLoginPage = false;
				}
			}
		});

		this.categoryService.getEventCategories().subscribe(
			(result) => {
				this.categories = result;
			},
			(error) => console.error(error)
		);
	}

	public onCategoryClicked(category: ICategoryDTO) {
		this.router.navigate([`categoryEvents/${category.id}`]);
	}

	public isAdminPage() {
		return this.router.url.includes("admin");
	}

	collapse() {
		this.isExpanded = false;
	}

	toggle() {
		this.isExpanded = !this.isExpanded;
	}

	logout() {
		localStorage.removeItem("auth_token");
		this.isAuthorized = false;
		this.adminLogoutClicked.emit(false);
		this.authService.authorizedSubject.next(false);
		window.location.reload();
	}
}
