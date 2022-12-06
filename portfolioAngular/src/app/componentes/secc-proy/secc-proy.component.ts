import { Component, OnInit } from '@angular/core';
import { DatosservicioService } from 'src/app/servicios/datosservicio.service';

@Component({
  selector: 'app-secc-proy',
  templateUrl: './secc-proy.component.html',
  styleUrls: ['./secc-proy.component.css']
})
export class SeccProyComponent implements OnInit {
  proyectosarray: any = [];
  constructor(private datos: DatosservicioService){}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data => {
      this.proyectosarray = data.proyectos;
    })
  }

}
