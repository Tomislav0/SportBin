import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './events/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
