import { NgModule }      from '@angular/core';
import { FotoComponent }   from './foto.component';
import { filtroPorTitulo } from './foto.pipes';

@NgModule({
  declarations: [ FotoComponent, filtroPorTitulo ],
  exports: [ FotoComponent, filtroPorTitulo ]
})
export class FotoModule { }