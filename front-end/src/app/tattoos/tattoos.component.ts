import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Tattoo } from "../tattoo";
import { TattooService } from "../tattoo.service";

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {
  tattoos: Tattoo[];

  constructor(
    private tattooService: TattooService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTattoos();
  }

  getTattoos(): void {
    this.tattooService.getTattoos()
      .subscribe(tattoos => this.tattoos = tattoos);
  }

  openTattooModal(tattoo: Tattoo): void {
    this.dialog.open(TattooModalComponent,
      {
        data: tattoo,
        height: '90vh'
      });
  }
}

@Component({
  selector: 'app-tattoo-modal',
  templateUrl: 'app-tattoo-modal.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattooModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Tattoo) { }
}
