import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-titulo',
    templateUrl: './titulo.component.html',
    styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
    @Input() texto: string;

    constructor() {
        console.log('TituloComponent', 'CONSTRUIDO');
    }

    ngOnInit(): void {
        console.log('TituloComponent', 'CARGADO');
    }
}
