import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
