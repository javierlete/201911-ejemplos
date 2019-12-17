import { Component, OnInit } from '@angular/core';
import { CONSTANTES } from '../constantes';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit {

  formato = CONSTANTES.FORMATO_FECHA;

  varPorcentaje = 0.21567;
  varDecimal = 0.6789;
  varMoneda = 45.2;
  varFecha = new Date();
  varTexto = 'Prueba de texto';

  varObjeto = { id: 1, name: 'alksdjflasd' };

  varMensajes = 1;

  pluralMensajes: {[k: string]: string} =
    {'=0': 'No hay mensajes.', '=1': 'Un mensaje.', other: '# mensajes.'};
  constructor() { }

  ngOnInit() {
  }

}
