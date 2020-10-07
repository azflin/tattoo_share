import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, MatDialogModule],
  exports: [MatToolbarModule, MatCardModule, MatGridListModule, MatDialogModule]
})
export class MaterialModule { }
