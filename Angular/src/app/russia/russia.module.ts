import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RussiaPageRoutingModule } from './russia-routing.module';

import { RussiaPage } from './russia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RussiaPageRoutingModule
  ],
  declarations: [RussiaPage]
})
export class RussiaPageModule {}
