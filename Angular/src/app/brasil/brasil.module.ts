import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrasilPageRoutingModule } from './brasil-routing.module';

import { BrasilPage } from './brasil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrasilPageRoutingModule
  ],
  declarations: [BrasilPage]
})
export class BrasilPageModule {}
