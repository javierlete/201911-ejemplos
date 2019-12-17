import { Component } from '@angular/core';

@Component({
    selector: 'app-titulo',
    template: '<h1>{{texto}}</h1>',
    styles: [ 'h1 { text-transform: uppercase; }' ]
})
export class TituloComponent {
    texto = 'Bienvenidos';
}
