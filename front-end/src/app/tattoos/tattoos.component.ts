import { Component, OnInit } from '@angular/core';
import { Tattoo } from "../tattoo";

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {
  tattoos: Tattoo[] = [
    {
      id: 1,
      description: 'Raijin sleeve',
      photo: 'http://127.0.0.1:8000/media/tattoos/raijin_sleeve_tony_1.png'
    },
    {
      id: 2,
      description: 'Monkey king sleeve',
      photo: 'http://127.0.0.1:8000/media/tattoos/MK_sleeve_tony_1.png'
    },
    {
      id: 3,
      description: 'Raijin sleeve',
      photo: 'http://127.0.0.1:8000/media/tattoos/raijin_sleeve_danny_1.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
