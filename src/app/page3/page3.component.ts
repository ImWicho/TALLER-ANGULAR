import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  imgUrl!: string;
  isLoading = true;
  constructor(private service: MiServicioService) { }

  ngOnInit(): void {
    this.obtenerMascota();
  }

  obtenerMascota():void{
    this.isLoading = true;
    this.service.obtenerCachorro().subscribe({
      next: (res) => {
        console.log(res);
        this.imgUrl = res.message
        this.isLoading = false;
      }
    })
  }

}
