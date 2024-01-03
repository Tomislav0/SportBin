import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [LoginComponent, AdminPageComponent, UsersComponent],
  imports: [CommonModule, AdministrationRoutingModule, SharedModule],
})
export class AdministrationModule {}
