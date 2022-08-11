import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  formulario!: FormGroup;

  constructor(private construirFormulario: FormBuilder) {
    this.onContruirFormulario()
  }

  ngOnInit(): void {
  }

  onContruirFormulario():void{
    this.formulario = this.construirFormulario.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      paterno: ['', [Validators.required]],
      materno: ['', [Validators.required]],
      sexo: [true, [Validators.required]],
    })
  }

  onEnviarDatos():void{
    console.log(this.formulario.value);
    
  }

}
