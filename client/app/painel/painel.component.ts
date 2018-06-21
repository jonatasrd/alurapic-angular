import {Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class painelComponent implements OnInit{
    @Input() titulo: string;
    elemento: ElementRef;

    constructor(element: ElementRef){
        this.elemento = element;
    }

    ngOnInit(){
        this.titulo = 
            this.titulo.length > 7
            ? this.titulo.substr(0,7) + '...'
            : this.titulo;
    }

    fadeOut(cb){
        $(this.elemento).fadeOut(cb);
    }
}