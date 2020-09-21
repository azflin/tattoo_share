import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {

  description = "Raijin sleeve";

  constructor() { }

  ngOnInit(): void {
  }

}
