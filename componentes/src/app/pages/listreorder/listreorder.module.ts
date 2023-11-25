import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListreorderPageRoutingModule } from './listreorder-routing.module';

import { ListreorderPage } from './listreorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListreorderPageRoutingModule
  ],
  declarations: [ListreorderPage]
})
export class ListreorderPageModule {}
