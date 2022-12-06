import { Component, OnInit } from '@angular/core';
import { DatosservicioService } from 'src/app/servicios/datosservicio.service';

@Component({
  selector: 'app-secc-presentacion',
  templateUrl: './secc-presentacion.component.html',
  styleUrls: ['./secc-presentacion.component.css']
})
export class SeccPresentacionComponent implements OnInit {
  
  nombre : string = '';
  apellido : string = '';
  edad : string = '';
  arquitecto : string = '';
  desarrollador : string = '';
  

  constructor(private datos: DatosservicioService){}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.edad = data.edad;
      this.arquitecto = data.arquitecto;
      this.desarrollador = data.desarrollador;
    })
  }

}
