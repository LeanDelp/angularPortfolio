import { Component, OnInit } from '@angular/core';
import { DatosservicioService } from 'src/app/servicios/datosservicio.service';

@Component({
  selector: 'app-secc-habili',
  templateUrl: './secc-habili.component.html',
  styleUrls: ['./secc-habili.component.css']
})
export class SeccHabiliComponent implements OnInit {
  habildurasarray: any = [];
  habilblandasarray: any = [];
  idiomasarray: any = [];
  constructor(private datos: DatosservicioService){}

  ngOnInit(): void{
    this.datos.getDatos().subscribe(data => {
      this.habildurasarray = data.habilidadesduras;
      this.habilblandasarray = data.habilidadesblandas; 
      this.idiomasarray = data.idiomas;
    })
  }

}
