import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
