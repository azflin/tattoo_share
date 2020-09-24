import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tattoo } from "../tattoo";

@Component({
  selector: 'app-tattoo-detail',
  templateUrl: './tattoo-detail.component.html',
  styleUrls: ['./tattoo-detail.component.css']
})
export class TattooDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
