import { Component, OnInit} from '@angular/core';
import { DatosservicioService } from 'src/app/servicios/datosservicio.service';

@Component({
  selector: 'app-secc-estudio',
  templateUrl: './secc-estudio.component.html',
  styleUrls: ['./secc-estudio.component.css']
})
export class SeccEstudioComponent implements OnInit {
  estudiosarray: any = [];
  constructor(private datos: DatosservicioService){}

    ngOnInit(): void{
      this.datos.getDatos().subscribe(data => {
        this.estudiosarray = data.estudios;
      })
    }
    
 

}
