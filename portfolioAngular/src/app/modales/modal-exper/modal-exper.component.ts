import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-exper',
  templateUrl: './modal-exper.component.html',
  styleUrls: ['./modal-exper.component.css']
})
export class ModalExperComponent implements OnInit {
  form: FormGroup;

 constructor (private formBuilder: FormBuilder){
  this.form= this.formBuilder.group({
   
})

}
ngOnInit() {}

get Info(){
  return this.form.get("text");
 }




onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

  if (this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo salio bien ¡Enviar formulario!")
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched(); 
  }

}
}

