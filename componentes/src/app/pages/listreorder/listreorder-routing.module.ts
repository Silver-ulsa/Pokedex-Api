import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListreorderPage } from './listreorder.page';

const routes: Routes = [
  {
    path: '',
    component: ListreorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListreorderPageRoutingModule {}
