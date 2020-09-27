import { Component, OnInit } from '@angular/core';

import { Tattoo } from "../tattoo";
import { TattooService } from "../tattoo.service";

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {
  tattoos: Tattoo[];

  constructor(private tattooService: TattooService) { }

  ngOnInit(): void {
    this.getTattoos();
  }

  getTattoos(): void {
    this.tattooService.getTattoos()
      .subscribe(tattoos => this.tattoos = tattoos);
  }

}
