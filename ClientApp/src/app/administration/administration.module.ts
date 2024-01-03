import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { AdministrationRoutingModule } from "./administration-routing.module";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared";
import { AdminPageComponent } from "./admin-page";
import { AdminHeaderComponent } from "./admin-header";
import { AdminNewEventComponent } from "./admin-new-event";
import { UsersComponent } from './users/users.component';
import { TestPhotoComponent } from './test-photo/test-photo.component';

@NgModule({
	declarations: [
		LoginComponent,
		AdminPageComponent,
		AdminHeaderComponent,
		AdminNewEventComponent,
		UsersComponent,
		TestPhotoComponent
	],
	imports: [CommonModule, AdministrationRoutingModule, SharedModule],
	providers: [DatePipe],
})
export class AdministrationModule {}
