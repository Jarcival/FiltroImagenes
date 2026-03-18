import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})

export class Gallery {
  imagenes = [
    { url :'https://picsum.photos/200/300' , categoria: 'naturaleza'},
    { url :'https://picsum.photos/200/300' , categoria: 'animales'},
    { url :'https://picsum.photos/200/300' , categoria: 'ciudad'},
    { url :'https://picsum.photos/200/300' , categoria: 'ciudad'},
    { url :'https://picsum.photos/200/300' , categoria: 'ciudad'},
  ]
  //Variable para almacenar las imagenes seleccionadas
  imagSelec= [
    { url :'https://picsum.photos/200/300' , categoria: 'naturaleza'},
    { url :'https://picsum.photos/200/300' , categoria: 'animales'},
    { url :'https://picsum.photos/200/300' , categoria: 'ciudad' },
    { url :'https://picsum.photos/200/300' , categoria: 'ciudad'},
    { url :'https://picsum.photos/200/300' , categoria: 'ciudad'},
    
  ]

  filtrarPorCat(categSel: string){
    if(categSel === 'todas'){
      this.imagSelec = this.imagenes; //Pasamos el arreglo tal cual
    }else{
      //funcion flecha que devuelve true 
      this.imagSelec=this.imagenes.filter(img => img.categoria === categSel) //.filter() crea un nuevo array solo con los elementos que cumplen la condicion

      
    }
  }

}
