import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tattoo } from "../tattoo";
import { TattooService } from "../tattoo.service";

@Component({
  selector: 'app-tattoo-detail',
  templateUrl: './tattoo-detail.component.html',
  styleUrls: ['./tattoo-detail.component.css']
})
export class TattooDetailComponent implements OnInit {

  tattoo : Tattoo;

  constructor(
    private tattooService: TattooService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getTattoo();
  }

  getTattoo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tattooService.getTattoo(id)
      .subscribe((tattoo: Tattoo) => this.tattoo = tattoo);
  }

}
