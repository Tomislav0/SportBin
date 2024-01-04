import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared';
import { AdminPageComponent } from './admin-page';
import { AdminHeaderComponent } from './admin-header';
import { AdminNewEventComponent } from './admin-new-event';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminPageComponent,
    AdminHeaderComponent,
    AdminNewEventComponent,
    ConfigurationComponent,
  ],
  imports: [CommonModule, AdministrationRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class AdministrationModule {}
