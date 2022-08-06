import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  isShowingComponents: boolean = false
  components: any[] = [
    'Componente 1',
    'Componente 2',
    'Componente 3',
    'Componente 4',
    'Componente 5',
    'Componente 6',
    'Componente 7',
    'Componente 8',
    'Componente 9',
    'Componente 10',
    'Componente 11',
    'Componente 12',
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onToggleComponents(): void{
    this.isShowingComponents = !this.isShowingComponents;
  }

}
