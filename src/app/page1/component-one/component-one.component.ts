import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  @Input() titulo : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
