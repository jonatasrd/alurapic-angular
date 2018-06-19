import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtroPorTitulo'
})
export class filtroPorTitulo implements PipeTransform{

    transform(fotos: any, digitado: string): any {
        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }

}