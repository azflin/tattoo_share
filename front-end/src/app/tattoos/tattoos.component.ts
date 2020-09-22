import { Component, OnInit } from '@angular/core';
import { Tattoo } from "../tattoo";

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {
  tattoo: Tattoo = {
    id: 1,
    description: 'Raijin sleeve',
    photo: 'http://127.0.0.1:8000/media/tattoos/raijin_sleeve.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
