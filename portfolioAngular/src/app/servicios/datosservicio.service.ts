import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuesta asincronica
import { Observable } from 'rxjs';
//hacer peticiones y CRUD
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosservicioService {
  //http = alias
  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos
  getDatos(): Observable<any>{
    //retorno de datos utilizando el metodo get HttpClient q llama a la base de datos JSON o a una URL

  return this.http.get('./assets/json/db.json');
  //aca se podria pone un callback para ver la opcion de problema de conexion del servidor
  }
}
