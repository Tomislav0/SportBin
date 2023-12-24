import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [LoginComponent, AdminPageComponent],
  imports: [CommonModule, AdministrationRoutingModule, SharedModule],
})
export class AdministrationModule {}
