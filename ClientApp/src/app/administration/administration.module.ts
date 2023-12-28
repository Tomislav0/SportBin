import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdministrationRoutingModule } from "./administration-routing.module";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared";
import { AdminPageComponent } from "./admin-page";
import { AdminHeaderComponent } from "./admin-header";

@NgModule({
	declarations: [LoginComponent, AdminPageComponent, AdminHeaderComponent],
	imports: [CommonModule, AdministrationRoutingModule, SharedModule],
})
export class AdministrationModule {}
