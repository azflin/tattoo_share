import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatGridListModule],
  exports: [MatToolbarModule, MatCardModule, MatGridListModule]
})
export class MaterialModule { }
