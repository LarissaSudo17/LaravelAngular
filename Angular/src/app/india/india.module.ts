import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiaPageRoutingModule } from './india-routing.module';

import { IndiaPage } from './india.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiaPageRoutingModule
  ],
  declarations: [IndiaPage]
})
export class IndiaPageModule {}
