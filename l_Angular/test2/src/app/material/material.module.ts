import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports:[MatChipsModule,MatButtonModule]
})
export class MaterialModule { }
