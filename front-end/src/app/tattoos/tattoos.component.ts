import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

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

  onClickMe() {
    this.dialog.open(TattooModalComponent);
  }
}

@Component({
  selector: 'app-tattoo-modal',
  templateUrl: 'app-tattoo-modal.html'
})
export class TattooModalComponent {}
