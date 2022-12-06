import { Component, OnInit} from '@angular/core';
import { DatosservicioService } from 'src/app/servicios/datosservicio.service';

@Component({
  selector: 'app-secc-exper',
  templateUrl: './secc-exper.component.html',
  styleUrls: ['./secc-exper.component.css']
})
export class SeccExperComponent implements OnInit {
  experarray : any = [];
  constructor(private datos: DatosservicioService){}

  ngOnInit(): void {
   this.datos.getDatos().subscribe(data => {
    this.experarray = data.experiencia;
  })
 }
 
}
