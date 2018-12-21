import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/Material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule
    ],
})
export class MaterialModule { }
